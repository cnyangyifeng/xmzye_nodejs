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
  collection.deleteOne({ quizUserId: 'o-MYb5EQt1Lcrpod7VjSccsIUTdw' }, (err, res) => {
    console.debug('delete quiz user: ', res.result)
    callback(res)
  })
}
