// crypto  理论上它叫（签名）

// 单向散列算法
// 签名算法
// md5 /sha

// 不想让人家看见  --bss  不能明文===>加密()   ==>（避免员工离职怀恨在心？）

const crypto =require("crypto");
// 选择哪种签名算法  ===》 返回一个crypto 对象
let obj = crypto.createHash("md5");
// 对字符串进行加密  Buffer 也行
obj.update("123456");
// 算出来的结果以16进制形式显示
// console.log(obj.digest("hex"));

// 123456  ===> md5 加密完成 ===> 能被破解
// 单向散列算法  ===>  只能进 不能出(回不来)  ===>  保密性较好的如qq，等的密码找回，是重新定义一个新密码
// 把常见的存起来，然后不断搜索  撞库

// 双层 md5  签名算法

let md5=(str)=>{
    let obj=crypto .createHash("md5");
    obj.update((str));
    return obj.digest("hex");
}
// 加一段我自己知道的字符串===>学名：混淆
let md=md5(md5("123456")+"wxxwyylhh");
console.log(md);
