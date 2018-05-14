const configs = require('../../../config')
const MongoClient = require('mongodb').MongoClient

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
  const collection = db.collection('quizUsers')
  collection.deleteMany({}, (err, res) => {
    console.debug('quizUsers is clear')
    callback(res)
  })
}
