const express=require("express");
let server=express();
const path=require("path");
server.listen(8022);

// express.static();---可控吗？
// 比如说权限  ===> 发送的资源是可控的，有的收费的不交钱就是无法下载
// 比如说腾讯的约谈===>公众号漫画===>涉黄

server.get("/a",(req,res)=>{
    let id=Math.random()*10;
    console.log(id);
    if(id>5){
        // sendFile
        // sendStatus ===>自动读取状态码，返回错误提示文字
        // 重定向

        // path  模块
        // error  sendFile  要求一个绝对的路径
        // res.sendFile("./a.txt");    error
        console.log(path.resolve("./a.txt"));
        res.sendFile(path.resolve("./a.txt"));
    }else{
        res.redirect("http://www.baidu.com");
        // 设置状态码
        res.sendStatus(404);   //writeHead()  write()  end()
        // res.send("你没有这个权限，请充值！");
    }
});