const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShuttleSchema = new Schema({
    shuttleName: {
        type: String
    },
    path: {
        type: String
    },
    status: {
        type: Number,
        enum: [0, 1, 2], //司机未到达，已到达，已出发
        default: 0
    },
    time: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('shuttle', ShuttleSchema);