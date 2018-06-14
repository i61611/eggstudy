//config.default.js文件

'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1513149018654_4517';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'ejs',
    defaultExtension: '.ejs'
  };

  config.security = {
    xframe:{
      enable:false
    }
  }
  return config;
};