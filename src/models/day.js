const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LateSchame = new Schema({
    astronaut: {
        type: String 
    },
    time: {
        type: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('late', LateSchame);