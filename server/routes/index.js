const router = require('koa-router')({
  // prefix: '/weapp'
})
const controllers = require('../controllers')

const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

router.get('/login', authorizationMiddleware, controllers.login)

router.get('/message', controllers.message.get)
router.post('/message', controllers.message.post)

router.get('/purchase/place_order', validationMiddleware, controllers.purchase.placeOrder)

router.get('/quiz_user', validationMiddleware, controllers.quizUsers.getQuizUser)
router.get('/quizzes/:quiz_id', validationMiddleware, controllers.quizzes.getQuiz)

module.exports = router
