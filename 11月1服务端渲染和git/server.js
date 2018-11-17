const express=require("express");
let server=express();
server.listen(8025);

server.use(express.static("template/ejs/"));

server.use("/index",require("./router/index2.js"));
server.use("/article",require("./router/article.js"));
