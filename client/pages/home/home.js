const configs = require('../../config')
const dateUtils = require('../../utils/dateUtils')
const msgs = require('../../msg')
const PromCodes = require('../../services/promCodes')
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const QuizGrid = require('../../services/quizGrid')
const quizGridBuilder = require('../../services/quizGridBuilder')
const QuizUser = require('../../services/quizUser')
const TunnelEvent = require('../../services/tunnelEvent')

const PROM_TYPE_FORM_HOOK = 1

const HOME_STATE_LOADING = 0
const HOME_STATE_MAIN = 1

Page({

  /**
   * 页面的初始数据
   */

  data: {

    reqReferrerId: '',
    reqPromType: 0,
    reqPromCode: '',
    reqQuizId: 0,

    /**
     * quizUser = {
     *   quizUserId: 'o-MYb5D7zZU-YQx09XDeFp3AAsUg',
     *   referrerId: 'o-MYb5Bl8ACVPSATTQqRwlJCUsXk',
     *   quizUserInfo: Object,
     *   vip: 0,
     *   totalKeyCount: 5,
     *   muted: 0,
     *   currentQuizTabIndex: 0,
     *   currentQuizTabName: '1-100',
     *   createTime: '2018-04-23 05:51:53'
     *   lastVisitTime: '2018-04-23 05:51:53'
     * }
     */

    quizUser: null, // 当前 quizUser

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
      title: `一分钟考验你的观察力和推理能力`,
      path: `/pages/home/home?referrer_id=${this.data.quizUser.quizUserId}`,
      imageUrl: `/assets/images/share_cover.jpg`,
      success: res => {
        console.debug(`转发成功：`, res)
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
      // 跳转至 retention 页面
      wx.navigateTo({
        url: `../retention/retention`
      })
    }
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
          QuizUser.clear()
          QuizGrid.clear()
          qcloud.clearSession()
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

  parsePageOptions: function (options) {
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
   * 处理页面显示
   */

  doShow: function () {
    // 更新页面数据 quizUser
    this.setData({
      quizUser: QuizUser.get()
    })
    if (!this.data.quizUser) {
      // 跳转至 login 页面
      console.debug(`跳转至 login 页面`)
      const reqReferrerId = this.data.reqReferrerId
      const param = (reqReferrerId === null) ? '' : `?referrer_id=${reqReferrerId}`
      wx.navigateTo({
        url: `/pages/login/login${param}`
      })
    } else {
      // 构建 quizGrid
      quizGridBuilder.build().then(() => {
        // 更新页面数据 quizGrid
        this.setData({
          quizGrid: QuizGrid.get()
        })
        // 处理 reqReferrerId
        this.handleReqReferrerId()
        // 处理 reqPromCode
        this.handleReqPromCode()
        // 处理页面路由
        this.handlePageRoute()
      })
    }
  },

  /**
   * 处理 reqReferrerId
   */

  handleReqReferrerId: function () {
    const quizUser = this.data.quizUser
    const reqReferrerId = this.data.reqReferrerId
    if (reqReferrerId !== '' && quizUser.referrerId === '') {
      quizUser.referrerId = reqReferrerId
      // 用完重置 reqReferrerId
      this.setData({
        reqReferrerId: ''
      })
      // 更新页面数据 quizUser
      this.setData({
        quizUser: quizUser
      })
      // 更新缓存数据 quizUser
      QuizUser.set(quizUser)
    }
  },

  /**
   * 处理 reqPromCode
   */

  handleReqPromCode: function () {
    const quizUser = this.data.quizUser
    const reqPromType = this.data.reqPromType
    const reqPromCode = this.data.reqPromCode
    if (reqPromCode !== '') {
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
            quizUser.totalKeyCount += 3
            quizUser.lastVisitTime = dateUtils.formatTime(new Date())
            promCodes.push(reqPromCode)
            PromCodes.set(promCodes)
            break
        }
      }
      // 用完重置 reqPromCode
      this.setData({
        reqPromType: 0,
        reqPromCode: ''
      })
      // 更新页面数据 quizUser
      this.setData({
        quizUser: quizUser
      })
      // 更新缓存数据 quizUser
      QuizUser.set(quizUser)
      // 同步 quizUser
      this.syncQuizUser()
    }
  },

  /**
   * 处理页面路由
   */

  handlePageRoute: function () {
    const reqQuizId = this.data.reqQuizId
    if (reqQuizId !== 0 && this.data.quizUser.totalKeyCount > 0) {
      // 用完重置 reqQuizId
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
        // 同步 quizUser
        this.syncQuizUser()
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
   * 同步 quizUser
   */

  syncQuizUser: function (formId) {
    return new Promise((resolve, reject) => {
      // 准备信道消息
      let content
      if (formId) {
        content = {
          quizUser: this.data.quizUser,
          quizUserForm: {
            quizUserId: this.data.quizUser.quizUserId,
            formId: formId,
            submitTime: dateUtils.formatTime(new Date())
          }
        }
      } else {
        content = {
          quizUser: this.data.quizUser
        }
      }
      // 发送信道消息
      const app = getApp()
      app.tunnel.emit(TunnelEvent.SYNC_QUIZ_USER_REQ, content)
      console.debug(`emit a '${TunnelEvent.SYNC_QUIZ_USER_REQ}' message: `, content)
      // 操作成功
      resolve()
    })
  }

})