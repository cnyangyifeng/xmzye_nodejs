const configs = require('../../../config')
const MongoClient = require('mongodb').MongoClient

/* ================================================================================ */

MongoClient.connect(configs.mongodb.url, (err, cli) => {
  console.debug('mongodb is connected')
  const db = cli.db('xmzye')
  queryQuizUsers(db, () => {
    cli.close()
  })
})

/* ================================================================================ */

const queryQuizUsers = (db, callback) => {
  const collection = db.collection('quizUsers')
  collection.find({}).toArray((err, res) => {
    console.debug('found the following records: ', res)
    console.debug('count: ', res.length)
    callback(res)
  })
}
