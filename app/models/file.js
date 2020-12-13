const mongoose = require('mongoose')
const validator = require('validator')

const FileSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    index: {
      type: String,
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
    filename: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
)
module.exports = mongoose.model('File', FileSchema)
