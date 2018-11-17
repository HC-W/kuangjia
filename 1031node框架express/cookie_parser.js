const express=require("express");
const cookieParser=require("cookie-parser");
let server=express();
server.listen(8022);

server.use(cookieParser("呵呵哒，你来打我呀hhhh"));

server.get("/a",(req,res)=>{
    console.log(req.cookies);
    // 设置cookie 服务端设置
    res.cookie("sex","2");
    // 防篡改
    // "s:21.6rJ/xb/hiA3unVoVwzkq6MvQ1RMpQ66t4j2YsksKSdg"
    /*
    s:带（签名）的cookie
    21:内容本身   签名
    */
    res.cookie("hash",21,{
        // 当前cookie采用签名处理  ===>key   函数cookieParser的参数
        signed:true
    })
    // 获取带签名的cookie
    console.log(req.signedCookies);
    res.send("今天有啥电视剧要更新？");
})