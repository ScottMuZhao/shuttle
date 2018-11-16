const Shuttle = require('../models/shuttle.model');
const User = require('../models/user.model');
const moment = require('moment');
const INTERVAL_TIME = 30 * 60 * 1000;
const GAP = 120 * 60 * 1000; 

module.exports = () => {
    setInterval(() => {
        console.log('自动化任务执行');
        const current = moment();
        const startDay = moment().startOf('day');
        console.log(current);
        console.log(startDay);
        const diff = current.diff(startDay);
        console.log(diff-GAP);
        
        if (diff < GAP) {
            console.log('重置');
            Shuttle.update({}, {status: 0}, {multi: true});
            User.update({}, {status: 1}, {multi: true});
        }
    }, INTERVAL_TIME);
}