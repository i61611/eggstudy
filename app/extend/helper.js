'use strict'
const addOrSub=require('./string/addOrSub');
module.exports={
    show(str){
        return addOrSub.removeOne(str);
    }
}