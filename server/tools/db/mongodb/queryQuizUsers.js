const configs = require('../../../config')
const log4js = require('log4js')
log4js.configure({
  appenders: {
    everything: { type: 'file', filename: 'quiz_users.log' }
  },
  categories: {
    default: { appenders: ['everything'], level: 'debug' }
  }
})
const logger = log4js.getLogger()
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
  collection.find({}).sort({ "lastVisitTime": -1 }).toArray((err, res) => {
    logger.debug('found the following records: ', res)
    logger.debug('count: ', res.length)
    console.debug('quiz users exported')
    console.debug('found the following records: ', res)
    console.debug('count: ', res.length)
    callback(res)
  })
}
