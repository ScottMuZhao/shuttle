const axios = require('axios');

const config = require('../config');
const UserService = require('../serviecs/user.service');


const code2SessionUrl = 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code';

exports.login = async (ctx, next) => {
    const {code} = ctx.request.body;
    const requestOption = {
        method: 'GET',
        url: `https://api.weixin.qq.com/sns/jscode2session?appid=${config.appid}&secret=${config.secret}&js_code=${code}&grant_type=authorization_code`
    }
    const response = await axios(requestOption);
    let openid;
    if (response.data.errcode !== 0) {
        ctx.body = {
            msg: '登录失败，请重新登录'
        }
        ctx.status = 401;
    } else {
        openid = response.data.openid;
        let user = await UserService.findByOpenid(openid);
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
    const userId = ctx.params;
    const userInfo = ctx.body;
    await UserService.update(userId, userInfo);
    ctx.status = 204;
};

exports.toggleWait = async (ctx, next) => {
    const {userId, status} = ctx.body;
    await UserService.changeStatus(userId, status);
    ctx.status =204;
}