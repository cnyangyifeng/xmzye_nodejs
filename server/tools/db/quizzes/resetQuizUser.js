const configs = require('../../../config')
const MongoClient = require('mongodb').MongoClient

/* ================================================================================ */

MongoClient.connect(configs.mongodb.url, (err, cli) => {
  console.debug('mongodb is connected')
  const db = cli.db('xmzye')
  resetQuizUser(db, () => {
    cli.close()
  })
})

/* ================================================================================ */

const resetQuizUser = (db, callback) => {
  const collection = db.collection('quizUsers')
  collection.updateOne(
    {
      quizUserId: 'o-MYb5D7zZU-YQx09XDeFp3AAsUg'
    },
    {
      $set: {
        totalKeyCount: 10
      }
    },
    (err, res) => {
      console.debug('reset my totalKeyCount to 10: ', res.result)
      callback(res)
    }
  )
}
