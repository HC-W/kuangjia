const express=require("express");
const bodyParser=require("body-parser");
let server=express();
server.listen(8022);

server.use(bodyParser.urlencoded(
    {
        extended:false
    }
));
server.get("/a",(req,res)=>{
    // console.log(res.query());
    console.log("哈哈哈，你捉不到我吧！");
});
server.post("/post",(req,res)=>{
    console.log(req.body);
})