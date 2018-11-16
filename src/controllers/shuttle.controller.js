const ShuttleService = require('../services/shuttle.service');
const UserService = require('../services/user.service');

exports.getAllShuttles = async (ctx, next) => {
    const shuttles = await ShuttleService.list();
    ctx.body = shuttles;
    ctx.status = 200;
};

exports.filterWaitUsersByShuttle = async (ctx, next) => {
    const query = {
        Shuttle: ctx.params.shuttleId,
        status: 1
    };
    ctx.body = await UserService.filter(query);
    ctx.status = 200;
};

exports.changeStatus = async (ctx, next) => {
    const status = ctx.body.status;
    const shuttleId = ctx.params.shuttleId;
    const askForWaitUsers = await UserService.filter({shuttle: shuttleId, status: 0});
    if (status === 1 && askForWaitUsers.length > 0) {
        ctx.body = {
            msg: '有光年未上车，请耐心等候'
        }
        ctx.status = 200;
    } else {
        await ShuttleService.changeStatus(shuttleId, status);
        ctx.status = 204;
    }
}

exports.getShuttle = async (ctx, next) => {
    const shuttleId = ctx.params.shuttleId;
    ctx.body = await ShuttleService.get(shuttleId);
    ctx.status = 200;
}