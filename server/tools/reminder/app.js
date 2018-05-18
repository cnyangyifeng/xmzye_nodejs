const configs = require('../../config')
const MongoClient = require('mongodb').MongoClient
const request = require('request')

/* ================================================================================ */

remind()

/* ================================================================================ */

async function remind() {
  console.log(`xmzye reminder starts.`)
  const cli = await MongoClient.connect(configs.mongodb.url)
  const collection = await cli.db('xmzye').collection('quizUserForms')
  const quizUserForms = await collection.find({}).sort({ submitTime: -1 }).toArray()
  for (let i = 0; i < quizUserForms.length; i++) {
    await remindQuizUser(quizUserForms[i])
  }
  await collection.deleteMany({})
  cli.close()
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
        value: '点击卡片，可获赠 5 把钥匙。'
      }
    },
    // emphasis_keyword: 'keyword1.DATA'
  }
  await sendTemplateMessage(accessToken, JSON.stringify(message))
}

/* ================================================================================ */

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