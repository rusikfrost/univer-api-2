const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const RatingSchema = new mongoose.Schema(
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
    theory_m1: {
      type: Number,
      required: true
    },
    theory_m2: {
      type: Number,
      required: true
    },
    practice_m1: {
      type: Number,
      required: true
    },
    practice_m2: {
      type: Number,
      required: true
    },
    total_mrs: {
      type: Number,
      required: true
    },
    exam_scores: {
      type: Number,
      required: true
    },
    total_scores: {
      type: Number,
      required: true
    },
    grade: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
RatingSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Rating', RatingSchema)
