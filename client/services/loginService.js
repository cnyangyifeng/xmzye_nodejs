const configs = require('../config')
const msgs = require('../msg')
const qcloud = require('../vendor/wafer2-client-sdk/index')
const QuizUser = require('./quizUser')

/**
 * 确保用户始终处于登录状态
 */

var ensureLoggedIn = function () {
  return new Promise((resolve, reject) => {
    // 如果在本地缓存中存在 Session 数据，则直接返回操作成功
    // 否则，执行登录操作
    if (qcloud.getSession()) {
      resolve()
    } else {
      // 为了获取更多的用户数据库中存储的信息
      // 放弃 qcloud.login, 直接使用 qcloud.request
      qcloud.request({
        url: `${configs.weapp}/quiz_user`,
        login: true,
        success: res => {
          // 更新本地缓存数据 quizUser
          const quizUser = res.data.data
          QuizUser.set(quizUser)
          // 操作成功
          resolve()
        },
        fail: err => {
          switch (err.type) {
            case qcloud.ERR_WX_GET_USER_INFO:
              wx.redirectTo({
                url: `../home/home`
              })
              break
            default:
              wx.showModal({
                title: msgs.login_fail_title,
                content: err.message,
                showCancel: false
              })
          }
          // 操作失败
          // reject()
        }
      })
    }
  })
}

module.exports = {
  ensureLoggedIn: ensureLoggedIn
}