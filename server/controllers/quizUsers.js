const configs = require('../config')
const MongoClient = require('mongodb').MongoClient
const moment = require('moment')

/* ================================================================================ */

async function getQuizUser(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    const quizUserInfo = ctx.state.$wxInfo.userinfo
    const referrerId = ctx.request.query['referrer_id']
    const cli = await MongoClient.connect(configs.mongodb.url)
    const db = cli.db('xmzye')
    const collection = db.collection('quizUsers')
    const quizUsers = await collection.find({
      'quizUserId': quizUserInfo.openId
    }).toArray()
    let quizUser = null
    if (quizUsers && quizUsers.length > 0) {
      quizUser = quizUsers[0]
    } else {
      const createTime = moment().format('YYYY-MM-DD HH:mm:ss')
      const lastVisitTime = createTime
      const defaultQuizUser = {
        quizUserId: quizUserInfo.openId,
        referrerId: referrerId,
        quizUserInfo: quizUserInfo,
        vip: 0,
        totalKeyCount: 1,
        muted: 0,
        currentQuizTabIndex: 0,
        currentQuizTabName: '1-40',
        maxAvailableQuizId: 1,
        createTime: createTime,
        lastVisitTime: lastVisitTime
      }
      const res = await collection.insertOne(defaultQuizUser)
      if (res && res.result && res.result.ok === 1) {
        quizUser = defaultQuizUser
      }
    }
    cli.close()
    ctx.state.data = quizUser
  } else {
    // 登录态已过期
    ctx.state.code = -1
  }
}

/* ================================================================================ */

module.exports = {
  getQuizUser
}