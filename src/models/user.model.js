const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
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
        type: String
    },
    shuttle: {
        type: Schema.Types.ObjectId
    },
    status: {
        type: Number,
        default: 0,
        enum: [0, 1]
    },
    extra: {
        type: Object
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('user', UserSchema);