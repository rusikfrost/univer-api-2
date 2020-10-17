const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const LecturerScheme = new mongoose.Schema(
  
  
  {
    uid: {
      type: String,
      required: true
    }, // пиши транслитом
    name: {
      type: String,
      required: true
    }, // ФИО
    photo: {
      type: String,
      required: true
    },
    position: {
      type: Array,
      required: false
    }, // Должность
    edu: {
      type: Array,
      required: false
    }, // Ученая степень, звание
    edu_type: {
      type: Array,
      required: false
    }, // Тип образования
    edu_specialty: {
      type: Array,
      required: false
    }, // Специальности
    edu_qualification: {
      type: Array,
      required: false
    }, // Квалификация
    edu_qualification_up: {
      type: Array,
      required: false
    }, // Повышение квалификации
    edu_experience: {
      type: Number,
      required: true
    }, // Стаж по специальности
    general_experience: {
      type: Number,
      required: true
    }, // Общий стаж
    disciplines: {
      type: Array,
      required: false
    }, // Дисциплины
    interests: {
      type: Array,
      required: false
    } // Научные интересы
  },
  
  
  /*{
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
      required: true
    },
    academic_degree: {
      type: String,
      required: true
    },
    academic_rank: {
      type: String,
      required: true
    },
    education: {
      type: Array,
      required: true
    },
    qualification: {
      type: Array,
      required: true
    },
    specialty: {
      type: Array,
      required: true
    },
    trainings: {
      type: Array,
      required: true
    },
    total_length_of_service: {
      type: String,
      required: true
    },
    length_work_of_speciality: {
      type: String,
      required: true
    },
    disciplines_taught: {
      type: Array,
      required: true
    },
    scientific_interests: {
      type: Array,
      required: true
    },
    photo: {
      type: String,
      required: true
    }
  },*/
  {
    versionKey: false,
    timestamps: true
  }
)
LecturerScheme.plugin(mongoosePaginate)
module.exports = mongoose.model('Lecturer', LecturerScheme)
