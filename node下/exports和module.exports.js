// exports 和 module.exports   require
// 前两个是导出的  ===>  exports 和 module.exports
// 后面的是导入的  ===>  require

// const jlsf = require("wyq_jlsf_npm");
// console.log(jlsf);

const hhkj =require("hhkj");
// console.log(hhkj);
// let c = new hhkj("你好","14","男","");

console.log(hhkj);
let n= new hhkj.Class("jaha",13,"d",[1,2,3]);
console.log(n);
// hhkj.fn(20);
// 在另一个文件中，只要没有使用exports导出，那么这边是获取不到的
// console.log(num);
