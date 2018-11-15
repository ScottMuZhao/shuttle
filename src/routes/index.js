const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.use('/user', require('./user.route').routes());
router.use('/shuttle', require('./shuttle.route').routes());

module.exports = router;