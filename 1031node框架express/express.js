const express=require("express");
let server=express();
server.listen(8022);
// express  入门简单-===> 非破坏式框架
    // 原生能用的，在这Express里面，基本没什么问题
    // 降低学习成本
// 破坏式框架 ===>koa(自己推翻自己的想法)
// 人懒 ===>啥都找API(框架)


// 好处：不会像以前一样，都往一个函数里面写，每个人的习惯不一样，简直不能看
// server.get("/username",(request,response)=>{
//     // write 有毛病：传不了对象，比如说[]{}
    // response.write("hello");
    // response.end();
//     // express 带的方法，传对象
//     // response.send({"name":"mmm"});    //可以实现
//     // response.send([1,2,3,4]);    //可以实现

    // console.log("我是get请求")
// })
// server.post("/post",(request,response)=>{
//     // response.writeHead("utf8");
//     // console.log("我是post请求")
//     response.write("post");
//     response.end();
// })

// 静态资源
// 压缩  缓存  开发者都帮忙处理了

// ==> 中间件<===
server.use(express.static("www/"))

// server.get  get请求
// server.post  post请求
// server.use  通吃

// request,response,next
//