const combineRoute = require('koa-combine-routers')
const posts = require('./posts')

const router = combineRoute(
  posts
)

module.exports = router
