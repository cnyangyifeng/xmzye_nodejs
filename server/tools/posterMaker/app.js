const Canvas = require('canvas')
const configs = require('../../config')
const MongoClient = require('mongodb').MongoClient
const request = require('request')

/* ================================================================================ */

const args = process.argv.splice(2)
const quizId = parseInt(args[0])
makePoster(quizId)

/* ================================================================================ */

async function makePoster(quizId) {
  console.log(`xmzye poster maker starts.`)
  const cli = await MongoClient.connect(configs.mongodb.url)
  const result = await cli.db('xmzye').collection('quizzes').find({
    'quizId': quizId
  }).toArray()
  cli.close()
  let quiz = null
  if (result && result.length > 0) {
    quiz = result[0]
  }
  console.log(quiz)
  const Image = Canvas.Image
  const canvas = new Canvas(200, 200)
  const ctx = canvas.getContext('2d')
  ctx.fillText(quiz.title, 20, 20)
  console.log('<img src="' + canvas.toDataURL() + '" />')
}

async function remindQuizUser(quizUserForm) {
  const accessToken = await requestAccessToken()
  const message = {
    touser: quizUserForm.quizUserId,
    template_id: 'RNbMbbXTmG3Ar0w9qJguAjMBQNgesnt1J9reL9e1OQk',
    page: `pages/home/home?prom_type=1&prom_code=${quizUserForm.formId}`,
    form_id: quizUserForm.formId,
    data: {
      keyword1: {
        value: '签到奖励',
        // color: '#e91e63'
      },
      keyword2: {
        value: '点击卡片，可获赠 3 把钥匙。'
      }
    },
    // emphasis_keyword: 'keyword1.DATA'
  }
  await sendTemplateMessage(accessToken, JSON.stringify(message))
}

/* ================================================================================ */

async function getQuiz(ctx, next) {
  const quizId = parseInt(ctx.params.quiz_id)
  const cli = await MongoClient.connect(configs.mongodb.url)
  const result = await cli.db('xmzye').collection('quizzes').find({
    'quizId': quizId
  }).toArray()
  cli.close()
  let quiz = null
  if (result && result.length > 0) {
    quiz = result[0]
  }
  ctx.state.data = quiz
}

function requestAccessToken() {
  return new Promise((resolve, reject) => {
    const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${configs.appId}&secret=${configs.appSecret}`
    request({
      url: url,
      method: 'GET'
    }, (err, res, body) => {
      if (!err && res.statusCode === 200) {
        const data = JSON.parse(body)
        resolve(data.access_token)
      }
    })
  })
}

function sendTemplateMessage(accessToken, reqBody) {
  return new Promise((resolve, reject) => {
    const url = `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=${accessToken}`
    request({
      url: url,
      method: 'POST',
      body: reqBody
    }, (err, res, body) => {
      if (!err && res.statusCode === 200) {
        const data = JSON.parse(body)
        console.debug(`send template message: `, data)
        resolve()
      }
    })
  })
}