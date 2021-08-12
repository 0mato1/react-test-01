/*
 * @Author: your name
 * @Date: 2021-07-09 10:29:41
 * @LastEditTime: 2021-07-09 11:37:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edite
 * @FilePath: \react-01\my-app-01\test-01\02-文件系统\01.buffer.js
 */
var str = 'liziming'
var buf = Buffer.from(str)
console.log(buf.length);
console.log(str.length);


var str1 = '大子明'
var buf1 = Buffer.from(str1)
console.log(buf1.length);//占用内存的大小
console.log(str1.length);//字符串长度

//创建指定大小的buffer
// var buf2 = new Buffer(10)   已废弃不推荐使用
 var buf2 = Buffer.alloc(10)
 var buf3 = Buffer.allocUnsafe(10)
 //通过索引操作buffer元素
console.log(buf2);
console.log(buf3);


var buf4 = Buffer.from('我是一段文本数据')
console.log(buf4);
console.log(buf4.toString());