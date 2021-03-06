const configs = require('../config')
const moment = require('moment')
const MongoClient = require('mongodb').MongoClient
const {
  tunnel
} = require('../qcloud')
const TunnelEvent = require('../services/tunnelEvent')

/* ================================================================================ */

/**
 * 实现 onConnect 方法
 * 在信道连接建立以后会调用本方法
 */

function onConnect(tunnelId) {
  console.debug(`[onConnect] =>`, {
    tunnelId
  })
}

/**
 * 实现 onClose 方法
 * 在连接被关闭（包括主动关闭和被动关闭）以后会调用本方法
 * 此时可以进行清理及通知操作
 */

function onClose(tunnelId) {
  console.debug(`[onClose] =>`, {
    tunnelId
  })
  tunnel.closeTunnel(tunnelId)
}

/**
 * 实现 onMessage 方法
 * 客户端推送消息到信道服务器以后会调用本方法，此时可以处理信道消息
 */

async function onMessage(tunnelId, messageType, messageContent) {
  console.debug(`[onMessage] =>`, {
    tunnelId,
    messageType,
    messageContent
  })
  switch (messageType) {
    case TunnelEvent.REF_QUIZ_USER_REQ:
      break
    case TunnelEvent.SYNC_QUIZ_USER_REQ:
      const quizUser = messageContent.quizUser
      const quizUserForm = messageContent.quizUserForm
      try {
        const cli = await MongoClient.connect(configs.mongodb.url)
        const db = cli.db('xmzye')
        console.debug(`quizUser: `, quizUser)
        if (quizUser) {
          await db.collection('quizUsers').updateOne({
            quizUserId: quizUser.quizUserId
          }, {
            $set: {
              quizUserId: quizUser.quizUserId,
              referrerId: quizUser.referrerId,
              quizUserInfo: quizUser.quizUserInfo,
              vip: quizUser.vip,
              totalKeyCount: quizUser.totalKeyCount,
              muted: quizUser.muted,
              currentQuizTabIndex: quizUser.currentQuizTabIndex,
              currentQuizTabName: quizUser.currentQuizTabName,
              createTime: quizUser.createTime,
              lastVisitTime: moment().format('YYYY-MM-DD HH:mm:ss')
            }
          }, {
            upsert: true
          })
        }
        console.debug(`quizUserForm: `, quizUserForm)
        if (quizUserForm) {
          await db.collection('quizUserAnswers').updateOne({
            quizUserId: quizUserForm.quizUserId,
            quizId: quizUserForm.quizId,
          }, {
            $set: {
              quizUserId: quizUserForm.quizUserId,
              nickName: quizUserForm.nickName,
              avatarUrl: quizUserForm.avatarUrl,
              quizId: quizUserForm.quizId,
              myAnswerFeedback: quizUserForm.myAnswerFeedback,
              submitTime: quizUserForm.submitTime
            }
          }, {
            upsert: true
          })
          await db.collection('quizUserForms').updateOne({
            quizUserId: quizUserForm.quizUserId
          }, {
            $set: {
              quizUserId: quizUserForm.quizUserId,
              nickName: quizUserForm.nickName,
              formId: quizUserForm.formId,
              submitTime: quizUserForm.submitTime
            }
          }, {
            upsert: true
          })
        }
        cli.close()
        tunnel.broadcast([tunnelId], TunnelEvent.SYNC_QUIZ_USER_RES, {
          data: 'success'
        })
      } catch (e) {
        console.debug(`[onMessage] error: `, e)
        tunnel.broadcast([tunnelId], TunnelEvent.SYNC_QUIZ_USER_RES, {
          error: e
        })
      }
      break
    default:
      break
  }
}

/* ================================================================================ */

module.exports = {

  /*
   * 响应客户端的信道连接请求，信道服务器连接成功以后通知客户端
   */

  get: async ctx => {
    const data = await tunnel.getTunnelUrl(ctx.req)
    const tunnelInfo = data.tunnel
    console.debug(`get tunnel: `, tunnelInfo)
    ctx.state.data = tunnelInfo
  },

  /*
   * 处理信道传递过来的消息
   */

  post: async ctx => {
    // 当用户发送消息到信道上时，使用 onTunnelMessage 处理信道上的消息
    const packet = await tunnel.onTunnelMessage(ctx.request.body)
    console.debug(`tunnel packet: `, packet)
    switch (packet.type) {
      case 'connect':
        onConnect(packet.tunnelId)
        break
      case 'close':
        onClose(packet.tunnelId)
        break
      case 'message':
        await onMessage(packet.tunnelId, packet.content.messageType, packet.content.messageContent)
        break
    }
  }

}