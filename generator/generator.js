const { ru, Faker } = require('@faker-js/faker')
const faker = new Faker({ locale: [ru] })

function createRandomPost () {
  const random = Math.floor(Math.random() * 121)
  return {
    id: faker.string.uuid(),
    author_id: faker.string.uuid(),
    title: faker.lorem.words(3),
    author: faker.person.fullName(),
    avatar: faker.image.avatar(),
    image: `https://randomfox.ca//images//${random}.jpg`,
    created: faker.date.between({ from: (Date.now() - 1000 * 60 * 60 * 12), to: (Date.now()) }).getTime()

  }
}

function createComments (postId) {
  const numberComments = Math.floor(Math.random() * 10)
  const comments = []

  for (let i = 0; i <= numberComments; i++) {
    comments.push({
      id: faker.string.uuid(),
      post_id: postId,
      author_id: faker.string.uuid(),
      author: faker.person.fullName(),
      avatar: faker.image.avatar(),
      content: faker.lorem.words(3),
      created: faker.date.between({ from: (Date.now() - 1000 * 60 * 60 * 12), to: (Date.now()) }).getTime()
    })
  }

  return comments
}

module.exports = { createRandomPost, createComments }
