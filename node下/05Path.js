// path  处理录几个的相关的一些东西
// 获取模块
const Path=require("path");
let str="D:/wang/h5";

// console.log(Path.extname(str));
// Path.extname(str)   最后输出为  文件的扩展名 ===> .png

console.log(Path.dirname(str));   
// Path.dirname(str)   最后输出为  文件所在的位置