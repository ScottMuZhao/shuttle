const User = require('../models/user.model');

class UserService {
    async create (user) {
        return await User.create(user);
    }
    async get (userId) {
        return await User.findById(userId);
    }
    async findByOpenid (openid) {
        return await User.find(openid);
    }
    async update (userId, user) {
        return await User.update({_id: userid}, {$set: user});
    }
    async changeStatus (userId, status) {
        return await User.update({_id: userid}, {status});
    }
}