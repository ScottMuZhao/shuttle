const Shuttle = require('../models/shuttle.model');

class ShuttleService {
    async get (shuttleId) {
        return await Shuttle.findById(shuttleId);
    }
    async list () {
        return await Shuttle.find({});
    }
    async changeStatus (shuttleId, status) {
        return await Shuttle.update({_id: shuttleId}, {status});
    }
}