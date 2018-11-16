const Shuttle = require('../models/shuttle.model');

class ShuttleService {
    static async get (shuttleId) {
        return await Shuttle.findById(shuttleId);
    }
    static async list () {
        return await Shuttle.find({});
    }
    static async changeStatus (shuttleId, status) {
        return await Shuttle.update({_id: shuttleId}, {status});
    }
    static async resetStatus (shuttleId) {
        await Shuttle.update({_id: shuttleId}, {status: 0});
    }
}

module.exports = ShuttleService;