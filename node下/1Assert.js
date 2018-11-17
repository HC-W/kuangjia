// assert  断言
// const assert = require("assert");
// function fn(a,b){
//     assert(arguments.length ===2,"当前参数数量不是2个");
//     assert(typeof a==="number","第一个参数不是数字");
//     assert(typeof b==="number","第二个参数不是一个数字");
//     return a+b;
// }
// let b=fn(10,"20");
// console.log(b);

const assert = require("assert");
function fn(a,b){
    assert(arguments.length ==2,"当前参数数量不为2");
}
let a=fn(10);
console.log(a);