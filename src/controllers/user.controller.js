const axios = require('axios');
const moment = require('moment');

const config = require('../config');
const UserService = require('../services/user.service');
const ShuttleService = require('../services/shuttle.service');
const RecordService = require('../services/record.service');


const code2SessionUrl = 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code';

exports.login = async (ctx, next) => {
    const {code} = ctx.request.body;
    const requestOption = {
        method: 'GET',
        url: `https://api.weixin.qq.com/sns/jscode2session?appid=${config.appid}&secret=${config.secret}&js_code=${code}&grant_type=authorization_code`
    }
    const response = await axios(requestOption);
    console.log(response.data);
    console.log(response.status);
    let openid;
    if (response.data.errcode) {
        ctx.body = {
            msg: '登录失败，请重新登录'
        }
        ctx.status = 401;
    } else {
        openid = response.data.openid;
        let user = await UserService.findByOpenid(openid);
        console.log(user);
        if (!user) {
            user = await UserService.create({openid});
        }
        ctx.body = user;
        ctx.status = 200;
    }
}

exports.getUserInfo = async (ctx, next) => {
    const {type, userId} = ctx.query;
    let user;
    if (type === 'openid') {
        user = await UserService.findByOpenid(userId);
    } else {
        user = await UserService.get(ctx.query.userId);
    }
    ctx.body = user;
    ctx.status = 200;
};

exports.updateUserInfo = async (ctx, next) => {
    const {userId} = ctx.params;
    const userInfo = ctx.request.body;
    console.log(userId);
    console.log(userInfo);
    await UserService.update(userId, userInfo);
    ctx.status = 204;
};

exports.toggleWait = async (ctx, next) => {
    const {userId, status} = ctx.body;
    const user = UserService.get(userId);
    const shuttle = ShuttleService.get(user.shuttle);
    if (status === 0 && (shuttle.status === 0 || shuttle.status === 2)) {
        ctx.body = {
            msg: '司机未到达或已发车'
        }
        ctx.status = 200;
    } else {
        if (status === 1) {
            const current = Date.now();
            const seconds = current.getHours()*60*60 + current.getMinutes()*60 + current.getSeconds();
            let timeArr = shuttle.time.split(':'); // 21:30:30
            const leaveSeconds = timeArr[0]*60*60 + timeArr[1]*60 + Number(timeArr[2]);
            const lateTime = seconds - leaveSeconds;
            await RecordService.create({
                user: user._id,
                time: lateTime
            });
        }
        await UserService.changeStatus(userId, status);
        ctx.status =204;
    }
};