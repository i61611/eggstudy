'use strict';
const RouteHome = require('./router/home')
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  RouteHome(app);
};