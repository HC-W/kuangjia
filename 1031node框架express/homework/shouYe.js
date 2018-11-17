const all=require("./全部.json");
const http=require("http");
const path=require("path");
const express=require("express");
let allRoute=express.Router();
// server.use("/topic",allRoute);
allRoute.get("/",(req,res)=>{
    res.redirect("http://localhost:8023/topic");
});
// :id 说明 /wyq  后边可以跟任意的东西
allRoute.get("/topic",(req,res)=>{
    res.send(`${all.data[0].title}<a href="http://localhost:8023/topic/${all.data[0].author.loginname}">文章</a>`);
});


// 嵌套文章
// let articRouter=express.Router();
let articRouter=require("./artic");
allRoute.use("/topic",articRouter);
// articRouter.get(`/${all.data[0].author.loginname}`,(req,res)=>{
//     res.send("第一个");
// });

module.exports=allRoute;


