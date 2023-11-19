const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    marks: {
        type: Number,
        required: true
    }

})

var Student = mongoose.model('Student', studentSchema)

module.exports = Student