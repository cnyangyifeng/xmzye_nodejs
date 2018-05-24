const msgs = require('../msg')
const TunnelEvent = require('./tunnelEvent')
const TunnelStatus = require('./tunnelStatus')

/**
 * 创建信道
 */

var parse = (page, app) => {
  // 关闭之前的信道
  if (app.globalData.tunnelStatus !== TunnelStatus.CLOSE) {
    console.debug(`close previous tunnel`)
    app.tunnel.close()
  }
  // 创建一个新的信道，并监听相关数据的变化
  app.initTunnel()
  // 监听 “连接已建立” 的 callback
  app.tunnelConnectCallback = () => {
    console.debug(`on tunnel connect callback`)
    // 隐藏导航栏加载动画
    // wx.hideNavigationBarLoading()
  }
  // 监听 “连接被关闭（包括主动关闭和被动关闭）” 的 callback
  app.tunnelCloseCallback = () => {
    console.debug(`on tunnel close callback`)
  }
  // 监听 “开始重连” 的 callback
  app.tunnelReconnectingCallback = () => {
    console.debug(`on tunnel reconnecting callback`)
    // 显示导航栏加载动画
    // wx.showNavigationBarLoading()
  }
  // 监听 “重连成功” 的 callback
  app.tunnelReconnectCallback = () => {
    console.debug(`on tunnel reconnect callback`)
    // 隐藏导航栏加载动画
    // wx.hideNavigationBarLoading()
  }
  // 监听 “信道发生错误” 的 callback
  app.tunnelErrorCallback = err => {
    console.debug(`on tunnel error callback: `, err)
    app.globalData.tunnelStatus = TunnelStatus.CLOSE
  }
  // 监听 “同步用户信息” 消息
  app.tunnel.on(TunnelEvent.SYNC_QUIZ_USER_RES, res => {
    console.info("on tunnel message: ", TunnelEvent.SYNC_QUIZ_USER_RES)
    if (res) {
      console.debug(`received message: `, res)
      if (res.error) {
        // 如果服务器处理失败、抛出异常，则显示异常消息弹窗
        console.debug(`sync quizUser message error: `, res.error)
      } else {
        // 如果服务器处理成功
        console.debug(`sync quizUser message: `, res.data)
      }
      // 隐藏导航栏加载动画
      // wx.hideNavigationBarLoading()
    }
  })
}

module.exports = {
  parse: parse
}