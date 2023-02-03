const mongooes = require('mongoose')
const postSchema = new mongooes.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      require: true,
    },
    category: {
      type: Array,
      require: false,
    },
  },
  { timestamps: true },
)
module.exports = mongooes.model('Post', postSchema)
