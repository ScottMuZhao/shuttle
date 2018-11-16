const User = require('../models/user.model');

class UserService {
    static async create (user) {
        return await User.create(user);
    }
    static async get (userId) {
        return await User.findById(userId).populate('shuttle');;
    }
    static async findByOpenid (openid) {
        return await User.findOne({openid}).populate('shuttle');
    }
    static async update (userId, user) {
        return await User.update({_id: userId}, {$set: user});
    }
    static async changeStatus (userId, status) {
        return await User.updateOne({_id: userId}, {$set: {status: status}});
    }
    static async filter (query) {
        return await User.find(query);
    }
}

module.exports = UserService;