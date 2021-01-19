const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SampleSchema_Schema = new Schema({
    attribute1: {
        type: String, // or bool, number, etc
        required: true
    },
    attribute2: {
        type: Date,
        default: Date.now
    } // Add more if needed
})

module.exports = SampleSchema = mongoose.model('Sample Schema', SampleSchema_Schema);