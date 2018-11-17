// 二进制 --buffer   帮助我们 node 处理二进制数据的数据结构
// 一定能操作  file   读取的文件都是以buffer存在的

// file system

const f=require("fs");
// 同步  ===> 卡住，一步完不成后边都要等待
// 异步  ===> 你可以先做别的事情

// 服务端  99.9% 都是异步

// 参数一  文件路径
// 参数二  回调函数  error  data(buffer)



f.writeFile("1.txt","呵呵哒",(err)=>{
    if(err){
        console.log("失败了吧！");
    }else{
        console.log("成功了呀!");
    }
})
f.readFile("1.txt",(err,data)=>{
    if(err){
        console.log("报错的");
    }else{
        // 服务器要一视同仁的对待   所有文件
        // 不能都当做文本来处理
        // 必须二进制
        // 浏览器是可以读懂的
        //    <===> 他们之间都是通过二进制来交换数据
        console.log(data.toString());
        // data  :  <Buffer e5 91 b5 e5 91 b5 e5 93 92>  使用toString()转换完后就是文件里面的数据  ===>  呵呵哒
    }
});