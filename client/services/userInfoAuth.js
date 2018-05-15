const USER_INFO_AUTH_KEY = 'userInfoAuth'

var UserInfoAuth = {

  get: function () {
    return wx.getStorageSync(USER_INFO_AUTH_KEY) || null
  },

  set: function (userInfoAuth) {
    wx.setStorageSync(USER_INFO_AUTH_KEY, userInfoAuth)
  },

  clear: function () {
    wx.removeStorageSync(USER_INFO_AUTH_KEY)
  }

}

module.exports = UserInfoAuth