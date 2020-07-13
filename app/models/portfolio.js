const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const PortfolioSchema = new mongoose.Schema(
  {
    student_name: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    lecturer: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    review: {
      type: String,
      required: true
    },
    review_path: {
      type: String,
      required: true
    },
    download_date: {
      type: Number,
      required: true
    },
    grade: {
      type: Number,
      required: true
    },
    grade_date: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
PortfolioSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Portfolio', PortfolioSchema)
