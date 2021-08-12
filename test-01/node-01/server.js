/*
 * @Author: your name
 * @Date: 2021-07-08 13:50:58
 * @LastEditTime: 2021-07-08 14:07:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-01\my-app-01\test-01\node-01\http.js
 */
var http = require('http')
http.createServer(function(request,response){
    //发送http头部
    //http状态值200：ok
    //内容类型
    response.writeHead(200,{'Content-Type': 'text/plain'});
    //发送响应数据
    response.end('hello world')
}).listen(8801)

console.log('Server running at http://127.0.0.1:8801/');