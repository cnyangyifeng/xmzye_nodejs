const configs = require('../../../config')
const MongoClient = require('mongodb').MongoClient
const quizzesData = require('./quizzesData')

/* ================================================================================ */

MongoClient.connect(configs.mongodb.url, (err, cli) => {
  console.debug('mongodb is connected')
  const db = cli.db('xmzye')
  clearQuizzes(db, () => {
    cli.close()
  })
})

/* ================================================================================ */

const clearQuizzes = (db, callback) => {
  const collection = db.collection('quizzes')
  collection.deleteMany({}, (err, res) => {
    console.debug('quizzes is clear')
    callback(res)
  })
}
