const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const LecturerScheme = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      required: true
    },
    rank: {
      type: String,
      required: true,
    },
    academic_degree: {
      type: String,
      required: true,
    },
    academic_rank: {
      type: String,
      required: true,
    },
    education: {
      type: Array,
      required: true,
    },
    qualification: {
      type: Array,
      required: true,
    },
    specialty: {
      type: Array,
      required: true,
    },
    trainings: {
      type: Array,
      required: true,
    },
    total_length_of_service: {
      type: String,
      required: true,
    },
    length_work_of_speciality: {
      type: String,
      required: true,
    },
    disciplines_taught: {
      type: Array,
      required: true,
    },
    scientific_interests: {
      type: Array,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
)
LecturerScheme.plugin(mongoosePaginate)
module.exports = mongoose.model('Lecturer', LecturerScheme)
