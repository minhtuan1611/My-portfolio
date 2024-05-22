const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema({
  title: { type: String },
  description: String,
})

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

module.exports = Portfolio