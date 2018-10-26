const mongoose = require('mongoose');

const config = require('./');

const connect = async () => {
    await mongoose.connect(config.db.uri, config.db.option);
}

module.exports = connect;