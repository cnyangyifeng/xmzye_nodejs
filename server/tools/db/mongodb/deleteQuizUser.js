const configs = require('../../../config')
const MongoClient = require('mongodb').MongoClient

/* ================================================================================ */

MongoClient.connect(configs.mongodb.url, (err, cli) => {
  console.debug('mongodb is connected')
  const db = cli.db('xmzye')
  deleteQuizUser(db, () => {
    cli.close()
  })
})

/* ================================================================================ */

const deleteQuizUser = (db, callback) => {
  const collection = db.collection('quizUsers')
  collection.deleteOne({ quizUserId: 'o-MYb5D7zZU-YQx09XDeFp3AAsUg' }, (err, res) => {
    console.debug('delete quiz user: ', res.result)
    callback(res)
  })
}
