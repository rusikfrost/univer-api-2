const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const NewsSchema = new mongoose.Schema(
  {
    images: {
      type: Array,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    introText: {
      type: String,
      required: true
    },
    fullText: {
      type: String,
      required: true
    },
    date: {
      type: Number,
      required: true
    }, 
    views: {
      type: Number,
      required: true
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
)
NewsSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('News', NewsSchema)
