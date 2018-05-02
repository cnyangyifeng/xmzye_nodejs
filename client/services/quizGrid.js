const QUIZ_GRID_KEY = 'quizGrid'

var QuizGrid = {

  get: function () {
    return wx.getStorageSync(QUIZ_GRID_KEY) || null
  },

  set: function (quizGrid) {
    wx.setStorageSync(QUIZ_GRID_KEY, quizGrid)
  },

  clear: function () {
    wx.removeStorageSync(QUIZ_GRID_KEY)
  }

}

module.exports = QuizGrid