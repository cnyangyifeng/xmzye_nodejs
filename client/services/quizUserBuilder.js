const dateUtils = require('../utils/dateUtils')
const QuizUser = require('./quizUser')

/**
 * 构建 quizUser
 */

var build = options => {
  return new Promise((resolve, reject) => {
    // 如果缓存数据 QuizUser 不存在
    const cachedQuizUser = QuizUser.get()
    if (!cachedQuizUser) {
      console.debug(`初始化 quizUser`)
      // 初始化 quizUser
      const createTime = dateUtils.formatTime(new Date())
      const quizUser = {
        quizUserId: options.userInfo.openId,
        referrerId: '',
        quizUserInfo: options.userInfo,
        vip: 0,
        totalKeyCount: 5,
        muted: 0,
        currentQuizTabIndex: 0,
        currentQuizTabName: '1-40',
        createTime: createTime,
        lastVisitTime: createTime
      }
      // 缓存 quizUser
      QuizUser.set(quizUser)
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