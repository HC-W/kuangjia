const express=require("express");
let server=express();
server.listen(8023);
let topic=require("./homework/shouYe");
server.use("/",topic);
