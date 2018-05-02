const coredb = require('../services/coredb')
const moment = require('moment')
const uuidGenerator = require('uuid/v4')

/* ================================================================================ */

/**
 * quizRecords = [
 *   {
 *     quizUserId: 'o-MYb5D7zZU-YQx09XDeFp3AAsUg',
 *     quizId: 1,
 *     quizUnlocked: 1,
 *     quizPlayed: 0,
 *     timeElapsed: 0,
 *     quizSolved: 0,
 *     quizQuestionImageUrl: 'https://xmzye-1256505289.cos.ap-guangzhou.myqcloud.com/system_data/quizzes/q1/q1.svg'
 *   }
 * ]
 */

async function getQuizRecords(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    const quizUserId = ctx.state.$wxInfo.userinfo.openId
    ctx.state.data =
      await coredb('quizRecord')
        .select('quizId', 'quizUnlocked', 'quizPlayed', 'timeElapsed', 'quizSolved', 'quizQuestionImageUrl')
        .where('quizUserId', quizUserId)
        .orderBy('quizId', 'asc')
  } else {
    // 登录态已过期
    ctx.state.code = -1
  }
}

async function getQuizRecordByQuizId(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    const quizUserId = ctx.state.$wxInfo.userinfo.openId
    const quizId = ctx.params.quiz_id
    ctx.state.data =
      await coredb('quizRecord')
        .first()
        .where({ 'quizUserId': quizUserId, 'quizId': quizId })
  } else {
    // 登录态已过期
    ctx.state.code = -1
  }
}

async function postQuizRecord(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    const quizUserId = ctx.state.$wxInfo.userinfo.openId
    const quizId = ctx.params.quiz_id
    const createTime = moment().format('YYYY-MM-DD HH:mm:ss')
    const lastVisitTime = createTime
    await coredb('quizRecord')
      .insert({
        quizUserId: quizUserId,
        quizId: quizId,
        quizUnlocked: 1,
        quizPlayed: 0,
        quizSolved: 0,
        quizQuestionImageUrl: '',
        createTime: createTime,
        lastVisitTime: lastVisitTime
      })
    ctx.state.data = quizId
  } else {
    // 登录态已过期
    ctx.state.code = -1
  }
}

/* ================================================================================ */

module.exports = {
  getQuizRecords,
  getQuizRecordByQuizId,
  postQuizRecord
}
