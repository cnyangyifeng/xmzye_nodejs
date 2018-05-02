const configs = require('../../config')
const loginService = require('../../services/loginService')
const msgs = require('../../msg')
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const QuizGrid = require('../../services/quizGrid')
const QuizUser = require('../../services/quizUser')

const HOME_STATE_LOADING = 0
const HOME_STATE_MAIN = 1

Page({

  /**
   * 页面的初始数据
   */

  data: {

    /**
     * quizUser = {
     *   quizUserId: 'o-MYb5D7zZU-YQx09XDeFp3AAsUg',
     *   quizUserInfo: Object,
     *   vip: 0,
     *   totalKeyCount: 10,
     *   muted: 0,
     *   currentQuizTabIndex: 0,
     *   currentQuizTabName: 'Q1-100',
     *   createTime: '2018-04-23T05:51:53.000Z'
     *   lastVisitTime: '2018-04-23T05:51:53.000Z'
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
     *         quizUserId: 'o-MYb5D7zZU-YQx09XDeFp3AAsUg',
     *         quizId: 1,
     *         quizUnlocked: 1,
     *         quizPlayed: 0,
     *         timeElapsed: 0,
     *         quizSolved: 0,
     *         quizQuestionImageUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q1/q1.svg'
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
    const quizId = options.quiz_id
    const referrerId = options.referrer_id
    if (quizId) {
      this.setData({
        reqQuizId: quizId
      })
    }
    if (referrerId) {
      this.setData({
        reqReferrerId: referrerId
      })
    }
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
    // 确保用户已登录
    loginService.ensureLoggedIn().then(() => {
      // 更新页面数据 quizUser
      this.setData({
        quizUser: QuizUser.get()
      })
      const quizId = this.data.reqQuizId
      if (quizId && this.data.quizUser.totalKeyCount > 0) {
        // 清空 reqQuizId，防止 quiz01 页面 navigateBack 造成循环跳转
        this.setData({
          reqQuizId: null
        })
        // 跳转至 home 页面
        console.debug(`跳转至 quiz01 页面`)
        wx.navigateTo({
          url: `/pages/quiz01/quiz01?quiz_id=${quizId}`
        })
      } else {
        // 初始化 quizGrid
        this.initQuizGrid().then(() => {
          // 更新页面数据 quizGrid, homeState
          this.setData({
            quizGrid: QuizGrid.get(),
            homeState: HOME_STATE_MAIN
          })
        })
      }
    })
  },

  /**
   * 监听页面隐藏
   */

  onHide: function () {

  },

  /**
   * 监听页面卸载
   */

  onUnload: function () {

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
      title: `原来你也是侦探？！快来帮我破案~`,
      imageUrl: '/assets/images/sherlock_cover.jpg',
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
   * 绑定事件：点击 quizTab
   */

  quizTabTap: function (e) {
    const quizTabIndex = e.currentTarget.dataset.quizTabIndex
    console.debug(`点击 quizTab: `, quizTabIndex)
    const quizUser = this.data.quizUser
    quizUser.currentQuizTabIndex = quizTabIndex
    quizUser.currentQuizTabName = this.data.quizGrid[quizTabIndex].quizTabName
    this.setData({
      quizUser: quizUser
    })
    QuizUser.set(quizUser)
  },

  /**
   * 绑定事件：swiper 的 current 属性改变
   */

  quizGridSwiperChange: function (e) {
    const current = e.detail.current
    console.debug(`current swiper item: ${current}`)
    const quizUser = this.data.quizUser
    quizUser.currentQuizTabIndex = current
    quizUser.currentQuizTabName = this.data.quizGrid[current].quizTabName
    this.setData({
      quizUser: quizUser
    })
    QuizUser.set(quizUser)
  },

  /**
   * 绑定事件：点击 quizCard
   */

  quizCardTap: function (e) {
    const quizId = parseInt(e.currentTarget.dataset.quizId)
    const quizCardIndex = parseInt(e.currentTarget.dataset.quizCardIndex)
    console.debug(`点击 quizCard: ${quizId}`)
    this.unlockQuiz(quizCardIndex).then(() => {
      wx.navigateTo({
        url: `/pages/quiz01/quiz01?quiz_id=${quizId}`
      })
    }, () => {
      wx.showModal({
        title: msgs.insufficient_keys_title,
        content: msgs.insufficient_keys_content,
        confirmText: msgs.unlock_all_title,
        success: res => {
          if (res.confirm) {
            this.purchase()
          }
        }
      })
    })
  },

  /**
   * 绑定事件：点击 vipButton
   */

  vipButtonTap: function () {
    console.debug(`点击 vipButton`)
    this.purchase()
  },

  /**
   * 绑定事件：点击 addKeyButton
   */

  addKeyButtonTap: function () {
    console.debug(`点击 addKeyButton`)
    this.purchase()
  },

  /**
   * 绑定事件：点击 userAvatar
   */

  userAvatarTap: function () {
    console.debug(`点击 userAvatar`)
    wx.showModal({
      title: msgs.clear_cache_title,
      content: msgs.clear_cache_content,
      showCancel: true,
      success: function (res) {
        if (res.confirm) {
          // 清空全部缓存数据
          console.debug(`清空全部缓存数据`)
          qcloud.clearSession()
          QuizUser.clear()
          QuizGrid.clear()
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
   * 初始化 quizGrid
   */

  initQuizGrid: function () {
    return new Promise((resolve, reject) => {
      // 如果缓存数据 QuizGrid 存在
      if (QuizGrid.get()) {
        // 直接返回操作成功
        resolve()
      } else { // 否则，初始化 quizGrid
        console.debug(`初始化 quizGrid`)
        let quizGrid = []
        for (let i = 0; i < 10; i++) {
          let quizTab = { quizTabName: `${100 * i + 1}-${100 * (i + 1)}` }
          let quizCards = []
          for (let j = 0; j < 100; j++) {
            const quizId = 100 * i + j + 1
            const quizCard = {
              quizId: quizId,
              quizUnlocked: 0,
              quizPlayed: 0,
              timeElapsed: 0,
              quizSolved: 0,
              quizQuestionImageUrl: ''
            }
            quizCards.push(quizCard)
          }
          quizTab['quizCards'] = quizCards
          quizGrid.push(quizTab)
        }
        QuizGrid.set(quizGrid)
      }
    })
  },

  /**
   * 解锁 quiz
   */

  unlockQuiz: function (quizCardIndex) {
    return new Promise((resolve, reject) => {
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
          // 操作成功
          resolve()
        } else { // 如果当前用户的钥匙数量不足
          // 操作失败
          reject()
        }
      } else { // 如果当前 quizCard 已解锁
        // 直接返回操作成功
        resolve()
      }
    })
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
        console.log(`下单成功：`, res)
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
            console.log(`支付成功：`, res)
            // 显示支付成功消息提示框
            wx.showToast({
              title: msgs.pay_success_title,
              mask: true
            })
            // 更新页面数据 quizUser
            const quizUser = this.data.quizUser
            quizUser.vip = 1
            quizUser.totalKeyCount = 9999
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
            console.log(`支付失败：`, err)
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
        console.log(`下单失败：`, err)
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