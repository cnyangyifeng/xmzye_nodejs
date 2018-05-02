const configs = require('../../config')
const MongoClient = require('mongodb').MongoClient
const quizzesData = require('./quizzes/quizzesData')

/* ================================================================================ */

MongoClient.connect(configs.mongodb.url, (err, cli) => {
  console.debug('mongodb is connected')
  const db = cli.db('xmzye')
  createQuizzes(db, () => {
    indexQuizzes(db, () => {
      cli.close()
    })
  })
})

/* ================================================================================ */

const createQuizzes = (db, callback) => {
  const collection = db.collection('quizzes')
  collection.insertMany(quizzesData, (err, res) => {
    console.debug('result: ', res)
    console.debug('result.ops.length: ', res.ops.length)
    callback(res)
  })
}

const indexQuizzes = function (db, callback) {
  db.collection('quizzes').createIndex(
    { 'quizId': 1 },
    null,
    (err, res) => {
      console.debug('index: ', res)
      callback()
    }
  )
}
