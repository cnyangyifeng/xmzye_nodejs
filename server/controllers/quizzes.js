const configs = require('../config')
const MongoClient = require('mongodb').MongoClient

/* ================================================================================ */

async function getQuiz(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    const quizId = parseInt(ctx.params.quiz_id)
    const cli = await MongoClient.connect(configs.mongodb.url)
    const result = await cli.db('xmzye').collection('quizzes').find({ 'quizId': quizId }).toArray()
    cli.close()
    let quiz = null
    if (result && result.length > 0) {
      quiz = result[0]
    }
    ctx.state.data = quiz
  } else {
    // 登录态已过期
    ctx.state.code = -1
  }
}

/* ================================================================================ */

module.exports = {
  getQuiz
}
