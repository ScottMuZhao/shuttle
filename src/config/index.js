let common = {};
module.exports = Object.assign({}, common, require(`./${process.env.NODE_ENV || 'development'}`));
