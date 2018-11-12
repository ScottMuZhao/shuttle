let common = {
    appid: 'APPID',
    secret: 'SECRET'
};
module.exports = Object.assign({}, common, require(`./${process.env.NODE_ENV || 'development'}`));
