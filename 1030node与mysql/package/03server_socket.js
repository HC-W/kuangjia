const http=require("http");
const ws=require("socket.io");

let server=http.createServer(
    (request,response)=>{

    }
).listen(8099);
let io=ws.listen(server);
let num=0;
io.on("connection",(sock)=>{
    setInterval(()=>{
        num++;
        socket.emit("www",num)
    },1000)
    sock.on("wyq",(data)=>{
        console.log(data);
    }) 
})