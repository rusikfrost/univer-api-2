const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const TimetableSchema = new mongoose.Schema({
    LOAD_ID: {
        type: String,
        required: true,
    },
    GROUP: {
        type: String,
        required: true,
    },
    DAY: {
        type: String,
        required: true
    },
    LES: {
        type: String,
        required: true
    },
    AUD: {
        type: String,
        required: true
    },
    WEEK: {
        type: String,
        required: true
    },
    SUBG: {
        type: String,
        required: false
    },
    POST: {
        type: String,
        required: false
    },
    NAME: {
        type: String,
        required: true
    },
    SUBJECT: {
        type: String,
        required: true
    },
    SUBJ_TYPE: {
        type: String,
        required: true
    },
    DATE: {
        type: String,
        required: true
    },
    CAFEDRA: {
        type: String,
        required: true
    },
    THEME: {
        type: String,
        required: false
    },
}, {
    versionKey: false,
    timestamps: true
})
TimetableSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Timetable', TimetableSchema)
    /* 
    GROUP: 'С-41',
    DAY: '6',
    LES: '4',
    AUD: 'ДО',
    WEEK: '2',
    SUBG: '',
    POST: '',
    NAME: 'Герасимов И.Н.',
    SUBJECT: 'Цифровые СП',
    SUBJ_TYPE: 'ПЗ',
    DATE: '12-09-2020',
    CAFEDRA: 'каф. ИТСС',
    THEME: '' 
    */

/* 
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
*/