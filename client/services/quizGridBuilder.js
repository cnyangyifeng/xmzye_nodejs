const QuizGrid = require('./quizGrid')

/**
 * 构建 quizGrid
 */

var build = function () {
  return new Promise((resolve, reject) => {
    // 如果缓存数据 QuizGrid 不存在
    const cachedQuizGrid = QuizGrid.get()
    if (!cachedQuizGrid) {
      console.debug(`初始化 quizGrid`)
      let quizGrid = []
      for (let i = 0; i < 5; i++) {
        let quizTab = { quizTabName: `${100 * i + 1}-${100 * (i + 1)}` }
        let quizCards = []
        for (let j = 0; j < 100; j++) {
          const quizId = 100 * i + j + 1
          const quizCard = {
            quizId: quizId,
            quizUnlocked: 0,
            quizLoaded: 0,
            quizQuestionImageUrl: '',
            timeElapsed: 0,
            myAnswerKey: 'N',
            myAnswerPoint: null,
            myAnswerFeedback: -1,
            quizSolved: 0
          }
          quizCards.push(quizCard)
        }
        quizTab['quizCards'] = quizCards
        quizGrid.push(quizTab)
      }
      // 缓存 quizGrid
      QuizGrid.set(quizGrid)
      // 操作成功
      resolve()
    } else {
      // 操作成功
      resolve()
    }
  })
}

module.exports = {
  build: build
}