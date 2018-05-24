const dateUtils = require('../utils/dateUtils')
const msgs = require('../msg')
const qcloud = require('../vendor/wafer2-client-sdk/index')
const QuizUser = require('./quizUser')

/**
 * 登录
 */

var login = options => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        console.debug(`wx.login 调用成功`)
        qcloud.requestLogin({
          loginParams: {
            code: res.code,
            encryptedData: options.encryptedData,
            iv: options.iv,
          },
          success: () => {
            console.debug(`qcloud.requestLogin 调用成功`)
            // 初始化 quizUser
            const createTime = dateUtils.formatTime(new Date())
            const quizUser = {
              quizUserId: options.userInfo.openId,
              referrerId: '',
              quizUserInfo: options.userInfo,
              vip: 0,
              totalKeyCount: 10,
              muted: 0,
              currentQuizTabIndex: 0,
              currentQuizTabName: '1-100',
              createTime: createTime,
              lastVisitTime: createTime
            }
            // 缓存 quizUser
            QuizUser.set(quizUser)
            // 操作成功
            resolve()
          },
          fail: err => {
            console.debug(`qcloud.requestLogin 报错：`, err)
            wx.redirectTo({
              url: `../home/home`
            })
          }
        })
      },
      fail: err => {
        console.debug(`wx.login 报错：`, err)
        wx.redirectTo({
          url: `../home/home`
        })
      }
    })
  })
}

module.exports = {
  login: login
}