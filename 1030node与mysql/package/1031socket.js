// 浏览器第一步先访问http
const http=require("http");
const mysql=require("mysql");
const url=require("url");

// 数据库连接池
let db=mysql.createPool({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"",
    // 数据库名称
    database:"zzq_wyq"
})
let server=http.createServer((request,response)=>{
    // request.url 用户；  emit on
    //             商家；  emit on
    let {pathname}=url.parse(request.url);
});

server.listen(8020);

const socket=require("socket.io");
let io=socket.listen(server);

// on  事件监听  ，data，end
io.on("connection",sock=>{
    // sock emit ===>发送
    // sock on ===>接收

    // 发送想给什么给什么
    // 当前处于什么状态
    sock.emit("aaa",10);
})