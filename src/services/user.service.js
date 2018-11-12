const User = require('../models/user.model');

class UserService {
    async create (user) {
        return await User.create(user);
    }
    async get (userId) {
        return await User.findById(userId).populate('shuttle');;
    }
    async findByOpenid (openid) {
        return await User.find(openid).populate('shuttle');
    }
    async update (userId, user) {
        return await User.update({_id: userId}, {$set: user});
    }
    async changeStatus (userId, status) {
        return await User.update({_id: userId}, {status});
    }
    async filter (query) {
        return await User.find(query);
    }
}