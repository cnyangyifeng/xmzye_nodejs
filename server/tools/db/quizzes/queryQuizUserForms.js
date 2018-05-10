const configs = require('../../../config')
const MongoClient = require('mongodb').MongoClient

/* ================================================================================ */

MongoClient.connect(configs.mongodb.url, (err, cli) => {
  console.debug('mongodb is connected')
  const db = cli.db('xmzye')
  queryQuizUserForms(db, () => {
    cli.close()
  })
})

/* ================================================================================ */

const queryQuizUserForms = (db, callback) => {
  const collection = db.collection('quizUserForms')
  collection.find({}).toArray((err, res) => {
    console.debug('found the following records: ', res)
    callback(res)
  })
}
