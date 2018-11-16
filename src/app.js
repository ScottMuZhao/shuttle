const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

const config = require('./config');
const errorTrace = require('./middleware/error-trace');
const router = require('./routes');

const connect = require('./config/db');

const server = async () => {
    await connect();
    require('./config/autoTask')();
    app
    .use(logger())
    .use(bodyParser())
    .use(errorTrace())
    .use(router.routes());
    app.listen(config.port, () => {
        console.log(`server started on port ${config.port}`);
    });
}

try {
    server()
} catch (err) {
    console.log(err);
    process.exit(1);
}
