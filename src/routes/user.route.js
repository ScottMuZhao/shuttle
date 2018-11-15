const KoaRouter = require('koa-router');
const router = new KoaRouter();

const userCtrl = require('../controllers/user.controller');

router.post('/login', userCtrl.login);

router.get('/me', userCtrl.getUserInfo);

router.put('/me/:userId', userCtrl.updateUserInfo);

router.patch('/me/status', userCtrl.toggleWait);

module.exports = router;