const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const AccessSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    news: {
      type: Number,
      // 0 none
      // 1 read
      // 2 update
      // 4 create/delete
      default: 1
    },
    users: {
      type: Number,
      default: 1
    },
    groups: {
      type: Number,
      default: 1
    },
    lecturers: {
      type: Number,
      default: 1
    },
    works: {
      type: Number,
      default: 1
    },
    timetable: {
      type: Number,
      default: 1
    },
    accesses: {
      type: Number,
      default: 1
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
AccessSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Access', AccessSchema)
