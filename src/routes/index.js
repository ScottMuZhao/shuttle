const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.use('/user', require('./user.route').routes());
router.use('/shuttle', require('./shuttle.route').routes());
router.use('/common', require('./common.route').routes());

module.exports = router;