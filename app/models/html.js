const mongoose = require('mongoose')
const validator = require('validator')

const HtmlSchema = new mongoose.Schema({
    route: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
})
module.exports = mongoose.model('Html', HtmlSchema)