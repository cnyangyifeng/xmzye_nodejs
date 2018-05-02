const configs = require('./config')
const qcloud = require('./vendor/wafer2-client-sdk/index')

App({

  globalData: {
  },

  /* ================================================================================ */

  onLaunch: function () {
    // 设置 login url
    qcloud.setLoginUrl(`${configs.weapp}/login`)
  }

})