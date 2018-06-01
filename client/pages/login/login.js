const quizUserBuilder = require('../../services/quizUserBuilder')

const ANIMATED_BG_URL = 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/images/background.gif'

Page({

  /**
   * 页面的初始数据
   */

  data: {
    bgUrl: null,
  },

  /**
   * 监听页面加载
   */

  onLoad: function (options) {
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
    // 加载动态背景图
    this.loadAnimatedBackground()
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
   * 加载动态背景图
   */

  loadAnimatedBackground: function () {
    wx.getNetworkType({
      success: res => {
        var networkType = res.networkType
        if (res.networkType === 'wifi' || res.networkType === '4g') {
          console.debug(`在 wifi 网络环境下，加载动态背景图`)
          wx.downloadFile({
            url: ANIMATED_BG_URL,
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
    quizUserBuilder.build(options).then(() => {
      // 重定向至 home 页面
      wx.redirectTo({
        url: `../home/home`
      })
    })
  }

})