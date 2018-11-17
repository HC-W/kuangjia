// node  自己带有 http

const server=require("http");

// 运行nodejs程序
/*
    1、盘符   c:  d:  e:
    2、进入目录
    3、运行  node  +  文件
*/

// 创建一个服务器，返回一个服务器对象
// 作为一个服务器 ，肯定24小时开机
let ser=server.createServer(
    (request,response)=>{
        // request  == > 请求   服务器端  ===> 接收的数据
        // 浏览器  一直在等response 发送响应(一些东西)
        // 浏览器和服务器之间靠网络来进行连接  (应用层)  http

        // 服务器 ： 客户端你需要告诉我你发送完了，我才不 转圈圈了
        console.log(request.url);
        console.log(request.method);
        // response  ==> 响应   服务器端  ===> 发送的数据
        response.write("哈喽哈，你好呀！");
        // 告诉服务器：我发完了
        response.end();
});
// 监听8088端口
// 人工服务请按0
// 端口号：
// http  :  80
// ftp  :  21
// mysql :3306
ser.listen(8088);
