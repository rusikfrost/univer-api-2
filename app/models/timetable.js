const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const TimetableSchema = new mongoose.Schema(
  {
    couple: {
      type: Number,
      required: true
    },
    lesson: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    lecturer: {
      type: String,
      required: true
    },
    room: {
      type: Number,
      required: true
    },
    date: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
TimetableSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Timetable', TimetableSchema)
