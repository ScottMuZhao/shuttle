const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.get('/current/time', async (ctx, next) => {
    const current = Date.now();
    ctx.body = current;
    ctx.status = 200;
});

router.get('/record/calculate', async (ctx, next) => {})

module.exports = router;