const db = require('../db/db')

const createPosts = () => {
  for (let i = 0; i < 13; i++) {
    db.addNewPost()
  }
}
module.exports = createPosts
