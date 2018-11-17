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
        type: Schema.Types.ObjectId,
        ref: 'shuttle'
    },
    status: {
        type: Number,
        default: 1,
        enum: [0, 1, 2] //无状态, 等一下, 已上车
    },
    extra: {
        type: Object
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('user', UserSchema);