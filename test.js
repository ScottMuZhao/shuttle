const moment = require('moment');

const a = moment(new Date());
const b = moment(new Date()).startOf('day');
console.log(a);
console.log(b);
console.log(a.diff(b));

