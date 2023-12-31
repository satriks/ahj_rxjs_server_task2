const Router = require('koa-router')
const db = require('../../db/db')
const router = new Router()

router.get('/posts/latest', async (ctx) => {
  const posts = (db.posts.map(post => post.post).reverse())
  posts.length = 10

  ctx.response.body = {
    status: 'OK',
    timestamp: Date.now().toString(),
    posts
  }
})

router.get('/posts/:id/comments/latest', async (ctx) => {
  const id = ctx.params.id


  const comments = (db.posts.filter(post => post.post.id === id).map(post => post.comments).reverse())[0]

  if (comments && comments.length > 3) comments.length = 3


  ctx.response.body = {
    status: 'OK',
    timestamp: Date.now().toString(),
    comments
  }
})

module.exports = router
