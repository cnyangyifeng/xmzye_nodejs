const configs = require('../config')
const MongoClient = require('mongodb').MongoClient

/* ================================================================================ */

async function getQuiz(ctx, next) {
  if (ctx.state.$wxInfo.loginState === 1) {
    const quizId = parseInt(ctx.params.quiz_id)
    const cli = await MongoClient.connect(configs.mongodb.url)
    const db = cli.db('xmzye')
    console.debug('mongodb is connected')
    const collection = db.collection('quizzes')
    const result = await collection.find({ 'quizId': quizId }).toArray()
    console.log(result[0])
    cli.close()
    ctx.state.data = result[0]
  } else {
    // 登录态已过期
    ctx.state.code = -1
  }
}

/* ================================================================================ */

module.exports = {
  getQuiz
}
