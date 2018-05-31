const QuizGrid = require('./quizGrid')

const QUIZ_TAB_COUNT = 5
const QUIZ_CARD_COUNT_PER_TAB = 40

/**
 * 构建 quizGrid
 */

var build = () => {
  return new Promise((resolve, reject) => {
    // 如果缓存数据 QuizGrid 不存在
    const cachedQuizGrid = QuizGrid.get()
    if (!cachedQuizGrid) {
      console.debug(`初始化 quizGrid`)
      let quizGrid = []
      for (let i = 0; i < 2; i++) {
        let quizTab = { quizTabName: `${40 * i + 1}-${40 * (i + 1)}` }
        let quizCards = []
        for (let j = 0; j < 40; j++) {
          const quizId = 40 * i + j + 1
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
      // 添加 “敬请期待” quizTab
      const todoQuizTab = { quizTabName: `敬请期待`, quizCards: [] }
      quizGrid.push(todoQuizTab)
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
  QUIZ_TAB_COUNT: QUIZ_TAB_COUNT,
  QUIZ_CARD_COUNT_PER_TAB: QUIZ_CARD_COUNT_PER_TAB,
  build: build
}