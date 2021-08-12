/*
 * @Author: your name
 * @Date: 2021-07-08 11:53:25
 * @LastEditTime: 2021-07-08 17:10:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-01\my-app-01\test-01\node-01\module.js
 */
require('./module1')
console.log('我是module，我引入了module1');


var add = require('./add')
console.log(add.add(1,7));

var fs = require("fs");
// console.log(fs);
fs.readFile('./module1',function(err,data){
    if(err){return console.log(err);}
    console.log(data.toJSON());
})
console.log('程序执行结束');