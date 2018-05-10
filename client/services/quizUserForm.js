const QUIZ_USER_FORM_KEY = 'quizUserForm'

var QuizUserForm = {

  get: function () {
    return wx.getStorageSync(QUIZ_USER_FORM_KEY) || null
  },

  set: function (quizUserForm) {
    wx.setStorageSync(QUIZ_USER_FORM_KEY, quizUserForm)
  },

  clear: function () {
    wx.removeStorageSync(QUIZ_USER_FORM_KEY)
  }

}

module.exports = QuizUserForm