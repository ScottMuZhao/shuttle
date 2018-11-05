const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShuttleSchema = new Schema({
    departure: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    path: {
        type: [{
            type: String
        }],
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('shuttle', ShuttleSchema);