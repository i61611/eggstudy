'use strict'

const Controller = require('egg').Controller;

class MyController extends Controller {
    async customIndex() {
        var str = await this.ctx.service.myservice.show('123','321');
        this.ctx.body = this.ctx.helper.show(str);
    }
}
module.exports = MyController;