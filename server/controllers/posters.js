const configs = require('../config')
const fs = require('fs')
const gm = require('gm').subClass({
  imageMagick: true
})
require('gm-base64')
const MongoClient = require('mongodb').MongoClient
const moment = require('moment')
const request = require('request')

/* ================================================================================ */

async function getPoster(ctx, next) {
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
  const accessToken = await requestAccessToken()
  await requestWxaCode(accessToken, quizId)
  ctx.state.data = await generatePoster(quiz)
}

/* ================================================================================ */

function requestAccessToken() {
  return new Promise((resolve, reject) => {
    // 请求 access_token 接口，参考开发文档 https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140183
    const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${configs.appId}&secret=${configs.appSecret}`
    request({
      url: url,
      method: 'GET'
    }, (err, res, body) => {
      if (!err) {
        const data = JSON.parse(body)
        // 操作成功
        resolve(data.access_token)
      } else {
        console.debug(`请求 access_token 报错：`, err)
        // 操作失败
        reject()
      }
    })
  })
}

function requestWxaCode(accessToken, quizId) {
  return new Promise((resolve, reject) => {
    // 请求小程序二维码接口B，参考开发文档 https://developers.weixin.qq.com/miniprogram/dev/api/qrcode.html
    const url = `https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${accessToken}`
    const wxaCodeReqData = {
      scene: quizId,
      page: 'pages/quiz01/quiz01',
      width: 430,
      auto_color: false,
      line_color: {
        "r": "255",
        "g": "255",
        "b": "255"
      },
      is_hyaline: true
    }
    request({
      url: url,
      method: 'POST',
      json: true,
      body: wxaCodeReqData
    }, (err, res, body) => {
      if (!err) {
        // 操作成功
        resolve(body)
      } else {
        console.debug(`请求小程序二维码报错：`, err)
        // 操作失败
        reject()
      }
    })
  })
}

function generatePoster(quiz) {
  return new Promise((resolve, reject) => {
    gm(750, 1334, "#212121")
      .noProfile()
      .font('/data/release/xmzye/tools/fonts/STHeiti.ttf', 40)
      .fill('#ffffff')
      .drawText(20, 80, quiz.title)
      .toBase64('jpg', true, (err, base64) => {
        if (!err) {
          console.debug('gm success. poster data: ', base64)
          resolve({
            width: 750,
            height: 1334,
            imgData: base64
          })
        } else {
          console.debug(err.message || 'gm fail')
          reject()
        }
      })
  })
}

/* ================================================================================ */

module.exports = {
  getPoster
}