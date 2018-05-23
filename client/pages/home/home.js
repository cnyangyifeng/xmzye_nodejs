const configs = require('../../config')
const dateUtils = require('../../utils/dateUtils')
const loginService = require('../../services/loginService')
const msgs = require('../../msg')
const PromCodes = require('../../services/promCodes')
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const QuizGrid = require('../../services/quizGrid')
const quizGridBuilder = require('../../services/quizGridBuilder')
const QuizUser = require('../../services/quizUser')
const UserInfoAuth = require('../../services/userInfoAuth')

const PROM_TYPE_FORM_HOOK = 1

const HOME_STATE_LOADING = 0
const HOME_STATE_MAIN = 1

Page({

  /**
   * 页面的初始数据
   */

  data: {

    userInfoAuth: false,

    reqPromType: 0,
    reqPromCode: '',

    /**
     * quizUser = {
     *   quizUserId: 'o-MYb5D7zZU-YQx09XDeFp3AAsUg',
     *   referrerId: 'o-MYb5Bl8ACVPSATTQqRwlJCUsXk',
     *   quizUserInfo: Object,
     *   vip: 0,
     *   totalKeyCount: 10,
     *   muted: 0,
     *   currentQuizTabIndex: 0,
     *   currentQuizTabName: '1-100',
     *   createTime: '2018-04-23 05:51:53'
     *   lastVisitTime: '2018-04-23 05:51:53'
     * }
     */

    quizUser: null, // 当前 quizUser
    reqReferrerId: '',

    /**
     * quizGrid = [
     *   {
     *     quizTabName: '1-100',
     *     quizCards: [
     *       {
     *         quizId: 1,
     *         quizUnlocked: 1,
     *         quizQuestionImageUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q1/q1.svg',
     *         quizLoaded: 1,
     *         timeElapsed: 0,
     *         myAnswerKey: 'N',
     *         myAnswerPoint: { x: 0, y: 0 },
     *         myAnswerFeedback: -1,
     *         quizSolved: 0
     *       }
     *     ]
     *   }
     * ]
     */

    quizGrid: null, // 当前 quizGrid
    reqQuizId: 0,

    homeState: HOME_STATE_LOADING, // 当前页面状态

  },

  /* ================================================================================ */

  /**
   * 监听页面加载
   */

  onLoad: function (options) {
    // 解析页面参数
    this.parsePageOptions(options)
  },

  /**
   * 监听页面初次渲染完成
   */

  onReady: function () {
  },

  /**
   * 监听页面显示
   */

  onShow: function () {
    // 处理页面显示
    this.doShow()
  },

  /**
   * 监听页面隐藏
   */

  onHide: function () {
    // 处理页面隐藏
    this.doHide()
  },

  /**
   * 监听页面卸载
   */

  onUnload: function () {
    // 处理页面隐藏
    this.doUnload()
  },

  /**
   * 监听用户下拉动作
   */

  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */

  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */

  onShareAppMessage: function () {
    return {
      title: `一分钟考验你的观察力和推理能力，赶快来挑战~`,
      imageUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/images/cover.jpg',
      path: `/pages/home/home?referrer_id=${this.data.quizUser.quizUserId}`,
      success: res => {
        console.debug(`转发成功`)
      },
      fail: err => {
        console.debug(`取消转发`)
      }
    }
  },

  /* ================================================================================ */

  /**
   * 绑定事件：点击 loginButton
   */

  loginButtonTap: function (e) {
    console.debug(`点击 loginButton`)
    this.setData({
      userInfoAuth: true
    })
    UserInfoAuth.set(true)
    // 处理登录
    this.doLogin()
  },

  /**
   * 绑定事件：点击 quizTab
   */

  quizTabTap: function (e) {
    const quizTabIndex = e.currentTarget.dataset.quizTabIndex
    console.debug(`点击 quizTab: `, quizTabIndex)
    // 更新页面数据 quizUser
    const quizUser = this.data.quizUser
    quizUser.currentQuizTabIndex = quizTabIndex
    quizUser.currentQuizTabName = this.data.quizGrid[quizTabIndex].quizTabName
    this.setData({
      quizUser: quizUser
    })
    // 缓存 quizUser
    QuizUser.set(quizUser)
  },

  /**
   * 绑定事件：swiper 的 current 属性改变
   */

  quizGridSwiperChange: function (e) {
    const current = e.detail.current
    console.debug(`current swiper item: ${current}`)
    // 更新页面数据 quizUser
    const quizUser = this.data.quizUser
    quizUser.currentQuizTabIndex = current
    quizUser.currentQuizTabName = this.data.quizGrid[current].quizTabName
    this.setData({
      quizUser: quizUser
    })
    // 缓存 quizUser
    QuizUser.set(quizUser)
  },

  /**
   * 绑定事件：点击 quizCard
   */

  quizCardTap: function (e) {
    const quizId = parseInt(e.currentTarget.dataset.quizId)
    const quizCardIndex = parseInt(e.currentTarget.dataset.quizCardIndex)
    console.debug(`点击 quizCard: ${quizId}`)
    const unlocked = this.unlockQuiz(quizCardIndex)
    if (unlocked) {
      wx.navigateTo({
        url: `/pages/quiz01/quiz01?quiz_id=${quizId}`
      })
    } else {
      // 微信支付，解锁全部
      // wx.showModal({
      //   title: msgs.insufficient_keys_title,
      //   content: msgs.insufficient_keys_content,
      //   confirmText: msgs.unlock_all_title,
      //   confirmColor: '#00ba80',
      //   success: res => {
      //     if (res.confirm) {
      //       this.purchase()
      //     }
      //   }
      // })
      wx.showModal({
        title: msgs.get_more_keys_title,
        content: msgs.get_more_keys_content,
        showCancel: false,
        confirmText: msgs.i_see_title,
        confirmColor: '#00ba80',
        success: res => {
          if (res.confirm) {
          }
        }
      })
    }
  },

  /**
   * 绑定事件：点击 addKeyButton
   */

  addKeyButtonTap: function () {
    console.debug(`点击 addKeyButton`)
    // 微信支付，解锁全部
    // wx.showModal({
    //   title: msgs.insufficient_keys_title,
    //   content: msgs.insufficient_keys_content,
    //   confirmText: msgs.unlock_all_title,
    //   confirmColor: '#00ba80',
    //   success: res => {
    //     if (res.confirm) {
    //       this.purchase()
    //     }
    //   }
    // })
  },

  /**
   * 绑定事件：点击 userAvatar
   */

  userAvatarTap: function () {
    console.debug(`点击 userAvatar`)
    wx.showModal({
      title: msgs.clear_cache_title,
      content: msgs.clear_cache_content,
      confirmColor: '#00ba80',
      success: res => {
        if (res.confirm) {
          // 清空全部缓存数据
          console.debug(`清空全部缓存数据`)
          qcloud.clearSession()
          QuizUser.clear()
          QuizGrid.clear()
          UserInfoAuth.clear()
          // 重定向至 home 页面
          wx.redirectTo({
            url: `../home/home`
          })
        }
      }
    })
  },

  /* ================================================================================ */

  /**
   * 解析页面参数
   */

  parsePageOptions(options) {
    // 如果指定了页面参数 referrer_id
    const referrerId = options.referrer_id
    if (referrerId) {
      // 更新页面数据 reqReferrerId
      this.setData({
        reqReferrerId: referrerId
      })
    }
    // 如果指定了页面参数 quiz_id
    const quizId = options.quiz_id
    if (quizId) {
      // 更新页面数据 reqQuizId
      this.setData({
        reqQuizId: parseInt(quizId)
      })
    }
    // 测试数据
    // options.prom_type = 1
    // options.prom_code = 'test_code'
    // 如果指定了页面参数 promType, promCode
    const promType = parseInt(options.prom_type)
    const promCode = options.prom_code
    if (promCode) {
      // 更新页面数据 reqPromType, reqPromCode
      this.setData({
        reqPromType: promType,
        reqPromCode: promCode
      })
    }
  },

  /**
   * 处理登录
   */

  doLogin: function () {
    // 确保用户已登录
    loginService.ensureLoggedIn().then(() => {
      // 处理页面显示
      this.doShow()
    })
  },

  /**
   * 处理页面显示
   */

  doShow: function () {
    // 更新页面数据 userInfoAuth, quizUser
    this.setData({
      userInfoAuth: UserInfoAuth.get(),
      quizUser: QuizUser.get()
    })
    // 构建 quizGrid
    quizGridBuilder.build().then(() => {
      this.setData({
        quizGrid: QuizGrid.get()
      })
      // 如果 quizUser 不存在
      const quizUser = this.data.quizUser
      if (!quizUser) {
        // 则重新授权登录
        UserInfoAuth.clear()
        this.setData({
          userInfoAuth: false
        })
      } else {
        // 更新 referrerId
        const referrerId = this.data.reqReferrerId
        if (referrerId !== '' && quizUser.referrerId === '') {
          quizUser.referrerId = referrerId
        }
        // 应用促销码
        const reqPromType = this.data.reqPromType
        const reqPromCode = this.data.reqPromCode
        let promCodes = PromCodes.get()
        let reqPromCodeExisted = false
        if (promCodes && Array.isArray(promCodes)) {
          reqPromCodeExisted = promCodes.some((item, index, arr) => {
            return item === reqPromCode
          })
        } else {
          promCodes = []
        }
        if (!reqPromCodeExisted) {
          switch (reqPromType) {
            case PROM_TYPE_FORM_HOOK:
              quizUser.totalKeyCount += 5
              quizUser.lastVisitTime = dateUtils.formatTime(new Date())
              promCodes.push(reqPromCode)
              PromCodes.set(promCodes)
              break
          }
        }
        // 更新页面数据 quizUser
        this.setData({
          quizUser: quizUser
        })
        // 更新缓存数据 quizUser
        QuizUser.set(quizUser)
        // 判断是否跳转页面
        const reqQuizId = this.data.reqQuizId
        if (reqQuizId !== 0 && this.data.quizUser.totalKeyCount > 0) {
          // 清空 reqQuizId，防止 quiz01 页面 navigateBack 造成循环跳转
          this.setData({
            reqQuizId: 0
          })
          // 跳转至 quiz01 页面
          console.debug(`跳转至 quiz01 页面`)
          wx.navigateTo({
            url: `/pages/quiz01/quiz01?quiz_id=${reqQuizId}`
          })
        } else {
          // 更新页面数据 homeState
          this.setData({
            homeState: HOME_STATE_MAIN
          })
        }
      }
    })
  },

  /**
   * 处理页面隐藏
   */

  doHide: function () {
    // 更新页面数据 homeState
    this.setData({
      homeState: HOME_STATE_LOADING
    })
  },

  /**
   * 处理页面卸载
   */

  doUnload: function () {
    // 更新页面数据 homeState
    this.setData({
      homeState: HOME_STATE_LOADING
    })
  },

  /**
   * 解锁 quiz
   */

  unlockQuiz: function (quizCardIndex) {
    let unlocked = false
    const quizGrid = this.data.quizGrid
    const quizTabIndex = this.data.quizUser.currentQuizTabIndex
    const quizCard = quizGrid[quizTabIndex].quizCards[quizCardIndex]
    // 如果当前 quizCard 未解锁
    if (quizCard.quizUnlocked === 0) {
      // 如果当前用户的钥匙数量足够
      if (this.data.quizUser.totalKeyCount > 0) {
        // 解锁 quiz
        console.debug(`解锁 quiz: `, quizCard.quizId)
        quizCard.quizUnlocked = 1
        this.setData({
          quizGrid: quizGrid
        })
        QuizGrid.set(quizGrid)
        // 消耗 1 把钥匙
        const quizUser = this.data.quizUser
        quizUser.totalKeyCount--
        this.setData({
          quizUser: quizUser
        })
        QuizUser.set(quizUser)
        unlocked = true
      } else { // 如果当前用户的钥匙数量不足
        unlocked = false
      }
    } else { // 如果当前 quizCard 已解锁
      unlocked = true
    }
    return unlocked
  },

  /**
   * 下单支付
   */

  purchase: function () {
    // 显示 loading 提示框
    wx.showLoading({
      title: msgs.loading_title,
      mask: true
    })
    // 调用微信支付统一下单接口
    qcloud.request({
      url: `${configs.weapp}/purchase/place_order`,
      login: true,
      success: res => {
        console.debug(`下单成功：`, res)
        // 隐藏 loading 提示框
        wx.hideLoading()
        // 发起微信支付请求
        const payData = res.data.data
        wx.requestPayment({
          'timeStamp': payData.timeStamp,
          'nonceStr': payData.nonceStr,
          'package': payData.package,
          'signType': payData.signType,
          'paySign': payData.paySign,
          'success': res => {
            console.debug(`支付成功：`, res)
            // 显示支付成功消息提示框
            wx.showToast({
              title: msgs.pay_success_title,
              mask: true
            })
            // 标记 quizUser 为 vip
            const quizUser = this.data.quizUser
            quizUser.vip = 1
            quizUser.totalKeyCount = 999999
            this.setData({
              quizUser: quizUser
            })
            QuizUser.set(quizUser)
            // 解锁 quizGrid
            const quizGrid = this.data.quizGrid
            for (let i = 0; i < quizGrid.length; i++) {
              let quizCards = quizGrid[i].quizCards
              for (let j = 0; j < quizCards.length; j++) {
                quizCards[j].quizUnlocked = 1
              }
            }
            this.setData({
              quizGrid: quizGrid
            })
            QuizGrid.set(quizGrid)
          },
          'fail': err => {
            console.debug(`支付失败：`, err)
            switch (err.errMsg) {
              case 'requestPayment:fail cancel':
                break
              default:
                wx.showToast({
                  title: msgs.pay_fail_title,
                  image: '/assets/images/warning.png',
                  mask: true
                })
            }
          }
        })
      },
      fail: err => {
        console.debug(`下单失败：`, err)
        // 隐藏 loading 提示框
        wx.hideLoading()
        wx.showToast({
          title: msgs.request_fail_title,
          image: '/assets/images/warning.png',
          mask: true
        })
      }
    })
  }

})