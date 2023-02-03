const mongooes = require('mongoose')
const CategorySchema = new mongooes.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
)
module.exports = mongooes.model('Category', CategorySchema)
