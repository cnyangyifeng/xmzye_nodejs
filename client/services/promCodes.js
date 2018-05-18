const PROM_CODES_KEY = 'promCodes'

var PromCodes = {

  get: function () {
    return wx.getStorageSync(PROM_CODES_KEY) || null
  },

  set: function (promCodes) {
    wx.setStorageSync(PROM_CODES_KEY, promCodes)
  },

  clear: function () {
    wx.removeStorageSync(PROM_CODES_KEY)
  }

}

module.exports = PromCodes