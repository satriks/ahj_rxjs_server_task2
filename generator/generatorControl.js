const db = require('../db/db')


const createPosts = () => {
  for (let i = 0; i < 13; i++) {
    db.addNewPost()
  }
  // console.log(db.posts[0]);
}
module.exports = createPosts
