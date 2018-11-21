const KoaRouter = require('koa-router');
const router = new KoaRouter();

const shuttleCtrl = require('../controllers/shuttle.controller');

router.get('/shuttles', shuttleCtrl.getAllShuttles);

router.get('/shuttles/:shuttleId', shuttleCtrl.getShuttle);

router.get('/shuttles/:shuttleId/users', shuttleCtrl.filterWaitUsersByShuttle);

router.put('/shuttles/:shuttleId/status', shuttleCtrl.changeStatus);

module.exports = router;