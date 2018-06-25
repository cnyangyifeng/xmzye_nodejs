const msgs = require('../../msg')
const purchaseService = require('../../services/purchaseService')
const QuizGrid = require('../../services/quizGrid')
const QuizUser = require('../../services/quizUser')
const TunnelEvent = require('../../services/tunnelEvent')

Page({

  /**
   * 页面的初始数据
   */

  data: {

    quizUser: null, // 当前 quizUser

    platform: ''

  },

  /**
   * 监听页面加载
   */

  onLoad: function (options) {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          platform: res.platform
        })
      }
    })
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
   * 用户点击右上角分享
   */

  onShareAppMessage: function () {
    return {
      title: `一分钟考验你的观察力和推理能力`,
      path: `/pages/home/home?referrer_id=${this.data.quizUser.quizUserId}`,
      imageUrl: `/assets/images/share_cover.jpg`,
      success: res => {
        console.debug(`转发成功：`, res)
        new Promise((resolve, reject) => {
          const quizUser = this.data.quizUser
          quizUser.totalKeyCount += 1
          this.setData({
            quizUser: quizUser
          })
          QuizUser.set(quizUser)
          wx.showToast({
            title: msgs.share_success_title,
            mask: true
          })
          resolve()
        }).then(() => {
          this.syncQuizUser().then(() => {
            wx.navigateBack({
              delta: -1
            })
          })
        })
      },
      fail: err => {
        console.debug(`取消转发`)
      }
    }
  },

  /* ================================================================================ */

  /**
   * 绑定事件：点击 unlockAllButton
   */

  unlockAllButtonTap: function () {
    console.debug(`点击 unlockAllButton`)
    const quizUser = this.data.quizUser
    const quizGrid = QuizGrid.get()
    purchaseService.purchase(quizUser, quizGrid).then(() => {
      this.syncQuizUser().then(() => {
        wx.navigateBack({
          delta: -1
        })
      })
    })
  },

  /* ================================================================================ */

  /**
   * 处理页面显示
   */

  doShow: function () {
    // 更新页面数据 quizUser
    this.setData({
      quizUser: QuizUser.get()
    })
    if (!this.data.quizUser) {
      wx.navigateBack({
        delta: -1
      })
    }
  },

  /**
   * 同步 quizUser
   */

  syncQuizUser: function (formId) {
    return new Promise((resolve, reject) => {
      let content
      if (formId) {
        content = {
          quizUser: this.data.quizUser,
          quizUserForm: {
            quizUserId: this.data.quizUser.quizUserId,
            nickName: this.data.quizUser.nickName,
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
  },

})