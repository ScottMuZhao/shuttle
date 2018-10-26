const errorTrace = () => {
    return async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            ctx.body = {
                msg: err.msg || '',
                debug: err.message
            }
            if (err.name == 'ValidationError') {
                err.status = 400;
            }
            ctx.status = err.status || 500;
        }
    }
}
module.exports = errorTrace;