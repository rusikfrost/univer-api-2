const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const RolesSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    news: {
      type: Number,
      //0 none
      //1 read
      //2 update
      //4 create/delete
      default: 0
    },
    users: {
      type: Number,
      default: 0
    },
    groups: {
      type: Number,
      default: 0
    },
    portfolio: {
      type: Number,
      default: 0
    },
    works: {
      type: Number,
      default: 0
    },
    timetable: {
      type: Number,
      default: 0
    },
    roles: {
      type: Number,
      default: 0
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
)
RolesSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Roles', RolesSchema)
