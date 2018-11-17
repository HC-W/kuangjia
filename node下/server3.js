const http=require('http');
// 解析？后面的模块（主要）
const query=require("querystring");
const url=require("url");

// 不管你是form  ajax  jsonop 提交，在服务器看来，都是表单提交       name=key&
let server=http.createServer(
    (request,response)=>{
        console.log(request.url);
        console.log(query.parse(request.url.split('?')[1]));
        let {user,pass}=query.parse(request.url.split('?')[1]);
        console.log(user,pass);
        // console.log(url.parse(request.url,true));
        response.write("88888");
        response.end();
    }
)
server.listen(8090);