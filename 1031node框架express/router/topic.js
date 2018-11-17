const express=require("express");
let articleRoute=express.Router();
// server.use("/topic",articleRoute);
articleRoute.get("/",(req,res)=>{
    res.send("官网首页");
});
// :id 说明 /wyq  后边可以跟任意的东西
articleRoute.get("/:id",(req,res)=>{
    res.send(`<h1>详情页</h1>`);
});

module.exports=articleRoute;
