let common = {
    appid: 'wx4aa6f0fcb4fc06c7',
    secret: '1b7217e99f4dad6b5c806ed4a58a5eb7'
};
module.exports = Object.assign({}, common, require(`./${process.env.NODE_ENV || 'development'}`));
