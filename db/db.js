const { createRandomPost, createComments } = require('../generator/generator')

const db = {

  posts: [],

  addNewPost () {
    const post = createRandomPost()
    const comments = createComments(post.id)
    this.posts.push({ post, comments })
  }

}

module.exports = db
