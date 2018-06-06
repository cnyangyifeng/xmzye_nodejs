module.exports = async (ctx, next) => {
  console.debug(ctx.state.$wxInfo)
  if (ctx.state.$wxInfo.loginState) {
    ctx.state.data = ctx.state.$wxInfo.userinfo
    ctx.state.data['time'] = Math.floor(Date.now() / 1000)
  }
}
