const express=require("express");
let server=express();
server.listen(8022);

server.get("/a",(req,res,next)=>{
    req.str="你说什么？";
    next();
})
server.get("/a",(req,res,next)=>{
    // console.log(req.str);
    req.str+="你真漂亮";
    next();
})
server.get("/a",(req,res,next)=>{
    // console.log(req.str);
    req.str+="谢谢，你也很漂亮.";
    next();
})
server.get("/a",(req,res,next)=>{
    res.send(req.str+"哈哈哈");
    // next();             //发送send后，就无法next了
})

server.use("/d",(req,res)=>{
    console.log(req.str);
})
server.post("/c",(req,res)=>{
    console.log(req);
})
server.get("/b",(req,res,next)=>{
    console.log(req.str);
})