const configs = {
  serverHost: '85585684.xiongmaozuoye.club',
  authServerUrl: 'http://10.104.197.123/mina_auth',
  tunnelServerUrl: 'https://85585684.ws.qcloud.la',
  tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
  // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.cloud.tencent.com/capi
  qcloudAppId: '1256505289',
  qcloudSecretId: 'AKIDWxLj9Ys1yreKpEodidT7aMSQDoDUpVvD',
  qcloudSecretKey: 'IPRIySlsqdEesvnaCe7RbbQ4Xp8IOODX',
  port: '80',
  rootPathname: '',
  appId: 'wx484583e426c93992',
  appSecret: 'f8f7c8ce8be783c0c6fbb1c3d9e35af9',
  useQcloudLogin: true,
  mysql: {
    host: '10.104.197.123', // qcloud intranet ip
    port: 3306,
    user: 'root',
    db: 'cAuth',
    pass: '2018^xmzy',
    char: 'utf8mb4'
  },
  mongodb: {
    url: 'mongodb://mongouser:2018%5Exmzy@10.66.246.29:27017/admin'
  },
  cos: {
    region: 'ap-guangzhou',
    fileBucket: 'xmzye',
    uploadFolder: 'user_data'
  },
  // 微信登录态有效期
  wxLoginExpires: 7200,
  wxMessageToken: 'xmzye'
}

module.exports = configs
