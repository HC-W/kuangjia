const express=require("express");
let server=express();
server.listen(8022);

server.use(require("./utils/utils_test"));
server.get("/a",(req,res)=>{
    let {user}=req.query;
    let bol=req.test(user);
    console.log(bol);
});