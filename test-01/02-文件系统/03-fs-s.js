/*
 * @Author: your name
 * @Date: 2021-08-05 15:22:54
 * @LastEditTime: 2021-08-05 15:37:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app-01\test-01\02-文件系统\03-fs异步文件写入.js
 */
//fs.open(path[, flags[, mode]], callback)
var fs = require('fs')
//打开文件
fs.open('./hello2.txt','w',function(err,fd){
    console.log(arguments);
    if(!err){
        console.log(fd);
    }else{
        console.log(err);
    }
})
// 异步方法没有返回值，有回调函数结果通过回调函数的参数返回  
