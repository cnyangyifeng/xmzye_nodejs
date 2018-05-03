const configs = require('../../../config')
const MongoClient = require('mongodb').MongoClient
const quizzesData = require('./quizzesData')

/* ================================================================================ */

MongoClient.connect(configs.mongodb.url, (err, cli) => {
  console.debug('mongodb is connected')
  const db = cli.db('xmzye')
  queryQuizzes(db, () => {
    cli.close()
  })
})

/* ================================================================================ */

const queryQuizzes = (db, callback) => {
  const collection = db.collection('quizzes')
  collection.find({}).toArray((err, res) => {
    console.debug('found the following records: ', res)
    callback(res)
  })
}
