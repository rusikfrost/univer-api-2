const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const WorkSchema = new mongoose.Schema(
  {
    work_name: {
      type: String,
      required: true
    },
    user_id: {
      type: String,
      required: true
    },
    lecturer_id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    grade: {
      type: String,
      required: false
    },
    grade_date: {
      type: Number,
      required: true
    },
    discipline: {
      type: String,
      required: true
    },
    upload_date: {
      type: Number,
      required: true
    },
    review_description: {
      type: String,
      required: false
    },
    review_date: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
WorkSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Work', WorkSchema)
