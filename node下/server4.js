// 引入
const http=require('http');
const query=require('querystring');
// 创建一个服务器对象

let server=http.createServer(
    (request,response)=>{
        let str='';
        // POST 数据量比较大
        /*
            断点续传： 一个视频，拆分成一些小包，比如说这次没有传完下次传输接上次的，不是从头开始的
                1、方便所有人  ===> 比如说没有较长的卡车了
                2、容错性强  ===>  
        */
    // 前端出现on ===>事件交互（用户）
    // node.js  没有和用户数据交互这件事

    // on  监听数据的传输
       request.on('data',(data)=>{
        // http 基于tcp 协议的3个保证
        str += data;
       })

    // 监听了得回应什么时候数据传完了
       request.on('end',()=>{
        console.log(str);
       })
       console.log(query.parse(request.url.split('?')[1]));
        response.end();
});
// 监听端口
server.listen(8070);