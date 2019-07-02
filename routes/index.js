const router = require('koa-router')()
const UserController = require('../controller/user');

router.get('/',UserController.getInfo)

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
