/*
 * @Author: your name
 * @Date: 2021-07-09 11:46:30
 * @LastEditTime: 2021-07-14 13:38:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-01\my-app-01\test-01\02-文件系统\02-fs.js
 */
//文件系统，fs文件是核心模块不需要下载
var fs = require('fs');

//文件写入步骤1.打开 fs.openSync(path[, flags[, mode]])         path：路径 flags：操作类型  model：设置文件操作权限
    
fs.openSync('./hello.txt','w')    //该方法返回i文件描述符作为结果，可以通过该描述符号对文件进行操作
var fd = fs.openSync('./hello.txt','w') 
console.log(fd);

// 2.向文件写入内容 fs.writeSync(fd, string[, position[, encoding]])    fd：要写入文件的描述符  string：要写入的内容     position：写入起始位置 encoding：写入的编码默认utf-8
fs.writeSync(4,'落魄江南载酒行')

//3.关闭文件fs.closeSync(fd)  fd:要关闭的文件描述符
fs.closeSync(4)