const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    openid: {
        type: String,
        required: true,
        unique: true
    },
    alias: {
        type: String
    },
    role: {
        type: String,
        enum: ['passenger', 'captain'],
        default: 'passenger'
    },
    tribe: {
        type: String,
        required: true
    },
    Shuttle: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0,
        enum: [0, 1]
    }
}, {
    timestamps: true
});

module.exports = mongooose.model('user', UserSchema);