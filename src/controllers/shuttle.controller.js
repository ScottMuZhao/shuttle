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
    await ShuttleService.changeStatus(shuttleId, status);
}

exports.getShuttle = async (ctx, next) => {
    const shuttleId = ctx.params.shuttleId;
    ctx.body = await ShuttleService.get(shuttleId);
    ctx.status = 200;
}