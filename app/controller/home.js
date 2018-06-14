//controller代码
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('/index', {
      name: "egg"
    });//index为view文件夹下需要渲染的页面，后面跟的是后台需要传递给前段的参数
  }
  async getParam(){
    let id = await this.ctx.query.id;
    this.ctx.body = id;
  }
  async postParam(){
    let id = await this.ctx.request.body.id;
    this.ctx.body = id;
  }
}

module.exports = HomeController;