const all=require("./全部.json");
const http=require("http");
const path=require("path");
const express=require("express");
let articRoute=express.Router();

// :id 说明 /wyq  后边可以跟任意的东西
articRoute.get(`/${all.data[0].author.loginname}`,(req,res)=>{
    res.send("文章");
});
module.exports=articRoute;