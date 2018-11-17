// 引入
const http=require('http');
// 创建一个服务器对象

// 思考题：
// 服务器能这么分流么？
/*
坏处：
    1、项目不可能只有几个文件
    2、文件多的时候需要写很多
    3、维护问题？   ===> 不好维护
    4、img  音频  视频 ==>无法上传
*/
let server=http.createServer(
    (request,response)=>{
        console.log(request.url);
        switch(request.url){
            case "/1.html":
                response.write("me 1.html");
                break;
            case "/2.html":
                response.write("me 2.html");
                break;
            default:
                response.write("404");
                break;
        };
        response.end();
    }
);
// 监听端口
server.listen(8090);