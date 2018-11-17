const express=require("express");
let server=express();
server.listen(8022);
// 创建了一个路由
let articleRoute=express.Router();
server.use("/topic",articleRoute);
articleRoute.get("/",(req,res)=>{
    res.send("官网首页");
});
// :id 说明 /wyq  后边可以跟任意的东西
articleRoute.get("/:id",(req,res)=>{
    res.send(`<h1>详情页</h1>`);
});


// 创建了一个路由
let userRouter=express.Router();
server.use("/user",userRouter);
userRouter.get("/:id",(req,res)=>{
    // 通过这个方法可以获取输入的id数值
    console.log(req.params);
    res.send("用户信息");
});


// 嵌套路由
let wyqRouter=express.Router();
userRouter.use("/ddd",wyqRouter);
wyqRouter.get("/abc",(req,res)=>{
    res.send("我是一个二级路由！！！")
});
// ===>(路由) 构建很难的