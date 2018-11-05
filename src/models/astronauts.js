const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AstronautsSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    wechatId: {
        type: String,
        required: true,
        unique: true
    },
    alias: {
        type: String
    },
    role: {
        type: String,
        enum: ['crew', 'captain'],
        required: true,
        default: 'crew'
    },
    tribe: {
        type: String,
        required: true
    },
    spacecraft: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongooose.model('astronaut', AstronautsSchema);