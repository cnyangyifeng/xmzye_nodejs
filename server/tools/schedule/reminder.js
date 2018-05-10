const configs = require('../../config')
const MongoClient = require('mongodb').MongoClient
const request = require('request')

/* ================================================================================ */

async function remind() {
  const cli = await MongoClient.connect(configs.mongodb.url)
  const quizUserForms = await cli.db('xmzye').collection('quizUserForms').find({}).sort({ submitTime: -1 }).toArray()
  cli.close()
  let quizUserForm = null
  if (quizUserForms && quizUserForms.length > 0) {
    quizUserForm = quizUserForms[0]
  }
  const accessToken = await requestAccessToken()
  const message = {
    touser: quizUserForm.quizUserId,
    template_id: 'RNbMbbXTmG3Ar0w9qJguAmFT1PzrC5uwbKCvxCSTppE',
    page: 'pages/home/home?quiz_id=qotd',
    form_id: quizUserForm.formId,
    data: {
      keyword1: {
        value: '每日一题',
        color: '#e91e63'
      },
      keyword2: {
        value: '每答对 1 道推理题，即可获赠 1 把钥匙，解锁新的题目。'
      },
      keyword3: {
        value: '1 把钥匙'
      }
    },
    emphasis_keyword: 'keyword1.DATA'
  }
  await sendTemplateMessage(accessToken, JSON.stringify(message))
}

remind()

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