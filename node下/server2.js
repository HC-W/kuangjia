// 引入
const http=require('http');
// 引入 fs 模块，文件读取模块
const fs=require("fs");
// 创建一个服务器对象
let server=http.createServer(
    (request,response)=>{
        let str=`./www${request.url}`;
        // response.write(request.url);
        // Error : write after end
        
        // 读取和传递都是异步的
        // 比如说白网盘  99%都是异步
        // 因为fs 是异步加载，所以 response.end(); 需要放在fs的里面
        // 否则运行完 end 以后fs 就不会运行了  ，就会出现上面的报错(Error : write after end)
        fs.readFile(str,(err,data)=>{
            if(err){
                // 机器能读懂的状态码
                response.writeHead(404);
                // 给用户去看的提示
                response.write("404");
            }else{
                response.write(data);
            }
            response.end();
        })
        
    }
);
// 监听端口
server.listen(8090);