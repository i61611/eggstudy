'use strict'
const Service = require('egg').Service;
class MyService extends Service {
    async show(zc, hh) {
        return zc + ' and ' + hh;
    }
}
module.exports = MyService;