//controller代码
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('/index', {
      name: "egg i love you"
    });//index为view文件夹下需要渲染的页面，后面跟的是后台需要传递给前段的参数
  }
}

module.exports = HomeController;