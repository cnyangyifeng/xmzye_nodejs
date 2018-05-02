const QUIZ_USER_KEY = 'quizUser'

var QuizUser = {

  get: function () {
    return wx.getStorageSync(QUIZ_USER_KEY) || null
  },

  set: function (quizUser) {
    wx.setStorageSync(QUIZ_USER_KEY, quizUser)
  },

  clear: function () {
    wx.removeStorageSync(QUIZ_USER_KEY)
  }

}

module.exports = QuizUser