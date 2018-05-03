const { uploader } = require('../qcloud')
const coredb = require('../services/coredb')
const moment = require('moment')
const uuidGenerator = require('uuid/v4')

/* ================================================================================ */

async function getQuizUser(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    const quizUserInfo = ctx.state.$wxInfo.userinfo
    const quizUser =
      await coredb('quizUser')
        .first()
        .where('quizUserId', quizUserInfo.openId)
    if (quizUser === undefined) {
      quizUser = await createDefaultQuizUser(quizUserInfo)
    }
    ctx.state.data = quizUser
  } else {
    // 登录态已过期
    ctx.state.code = -1
  }
}

/* ================================================================================ */

/**
 * 创建一条默认的 quizUser 数据
 */

async function createDefaultQuizUser(quizUserInfo) {
  const quizUserId = quizUserInfo.openId
  const createTime = moment().format('YYYY-MM-DD HH:mm:ss')
  const lastVisitTime = createTime
  await coredb('quizUser')
    .insert({
      quizUserId: quizUserId,
      quizUserInfo: JSON.stringify(quizUserInfo),
      vip: 0,
      totalKeyCount: 10,
      muted: 0,
      currentQuizTabIndex: 0,
      currentQuizTabName: '1-100',
      createTime: createTime,
      lastVisitTime: lastVisitTime
    })
  return await coredb('quizUser')
    .first()
    .where('quizUserId', quizUserId)
}

/* ================================================================================ */

module.exports = {
  getQuizUser
}
