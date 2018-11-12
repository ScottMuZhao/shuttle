const KoaRouter = require('koa-router');
const router = new KoaRouter();

const shuttleCtrl = require('../controllers/shuttle.controller');

router.get('/shuttles', shuttleCtrl.getAllShuttles);

router.get('/shuttle/:shuttleId', shuttleCtrl.getShuttle);

router.get('/shuttle/:shuttleId/users', shuttleCtrl.filterWaitUsersByShuttle);

router.patch('/shuttles/:shuttleId/status', shuttleCtrl.changeStatus)

module.exports = router;