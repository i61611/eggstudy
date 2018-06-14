module.exports = app => {
    'use strict'
    const {
        home
    } = app.controller;
    let root = '/home'
    app.get('/', home.index);
    app.get(root + '/param', home.getParam);
    app.post(root+'/paramPost',home.postParam);
}