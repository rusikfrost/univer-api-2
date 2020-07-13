const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const GroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
GroupSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Group', GroupSchema)
