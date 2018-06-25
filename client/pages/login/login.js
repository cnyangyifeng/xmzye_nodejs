const configs = require('../../config')
const msgs = require('../../msg')
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const QuizUser = require('../../services/quizUser')

Page({

  /**
   * 页面的初始数据
   */

  data: {

    reqReferrerId: null,

    bgUrl: null,
    loggingIn: false

  },

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

  /* ================================================================================ */

  /**
   * 绑定事件：点击 loginButton
   */

  loginButtonTap: function (e) {
    console.debug(`点击 loginButton`)
    const options = e.detail
    if (options.errMsg !== 'getUserInfo:fail auth deny') {
      this.doLogin(options)
    }
  },

  /* ================================================================================ */

  /**
   * 解析页面参数
   */

  parsePageOptions: function (options) {
    // 如果指定了页面参数 referrer_id
    const reqReferrerId = options.referrer_id
    if (reqReferrerId) {
      // 更新页面数据 reqReferrerId
      this.setData({
        reqReferrerId: reqReferrerId
      })
    }
  },

  /**
   * 处理页面隐藏
   */

  doShow: function () {
    // 加载动态背景图
    this.loadAnimatedBackground()
  },

  /**
   * 加载动态背景图
   */

  loadAnimatedBackground: function () {
    wx.getNetworkType({
      success: res => {
        var networkType = res.networkType
        if (res.networkType === 'wifi') {
          console.debug(`在 wifi 网络环境下，加载动态背景图`)
          wx.downloadFile({
            url: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/images/background.gif',
            success: res => {
              if (res.statusCode === 200) {
                console.debug(`成功下载动态背景图`)
                this.setData({
                  bgUrl: res.tempFilePath
                })
              }
            }
          })
        }
      }
    })
  },

  /**
   * 处理登录
   */

  doLogin: function (options) {
    wx.showNavigationBarLoading()
    this.setData({
      loggingIn: true
    })
    const reqReferrerId = this.data.reqReferrerId
    const param = (reqReferrerId === null) ? '' : `?referrer_id=${reqReferrerId}`
    qcloud.request({
      url: `${configs.weapp}/quiz_user${param}`,
      login: true,
      success: res => {
        const quizUser = res.data.data
        QuizUser.set(quizUser)
        console.debug(`登录成功：`, quizUser)
        // 返回上级页面
        wx.navigateBack({
          delta: -1
        })
      },
      fail: err => {
        console.debug(`登录失败：`, err)
        wx.hideNavigationBarLoading()
        this.setData({
          loggingIn: false
        })
        // 显示消息提示框
        wx.showToast({
          title: msgs.login_fail_title,
          image: '/assets/images/warning.png',
          mask: true
        })
      }
    })
  }

})