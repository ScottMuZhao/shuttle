const Record = require('../models/record.model');

class RecordService {
    static async create (record) {
        return Record.create(record);
    }
    static async list (query, option = {}) {
        return Record.find(query);
    }
}

module.exports = RecordService;