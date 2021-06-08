const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const TimetableSchema = new mongoose.Schema({
    LOAD_ID: {
        type: String,
        required: false,
    },
    GROUP: {
        type: String,
        required: false,
    },
    DAY: {
        type: String,
        required: false
    },
    LES: {
        type: String,
        required: false
    },
    AUD: {
        type: String,
        required: false
    },
    WEEK: {
        type: String,
        required: false
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
        required: false
    },
    SUBJECT: {
        type: String,
        required: false
    },
    SUBJ_TYPE: {
        type: String,
        required: false
    },
    DATE: {
        type: String,
        required: false
    },
    CAFEDRA: {
        type: String,
        required: false
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
  required: false
},
lesson: {
  type: String,
  required: false
},
type: {
  type: String,
  required: false
},
lecturer: {
  type: String,
  required: false
},
room: {
  type: Number,
  required: false
},
date: {
  type: Number,
  required: false
} 
*/