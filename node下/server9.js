// 引入
const http=require("http");
const querystring=require("querystring");
const url=require("url");
const fs=require("fs");
let users={
  'wyq': '123456',
  'ldx': '654321'
 };

// 构造服务器
// 在这里不能写断言===> 因为错误，不能往自己身上揽
// 前端  ===》数据  ===》后端===》发现错误===》前端
//  需要把错误返回给前端而不能自己在后台处理，不然前端的人哪里知道错了还是对了
let server=http.createServer(
    (request,response)=>{
        // console.log(url.parse(request.url,true));
        // console.log(url.parse(request.url,true));
        let {pathname,query}=url.parse(request.url,true);
        console.log(pathname);

        // POST
        let str="";
        request.on("data",data=>{
            str+=data;
        });
        request.on("end",()=>{

        let post=querystring.parse(str);

        let {user, pass}=query;

    //写东西
    //安全性这个问题  后端如果不安全，99%都是因为懒
    switch(pathname){
      case '/reg':      //注册
        if(!user){
          response.write('{"err": 1, "msg": "user is reuquired"}');
        }else if(!pass){
          response.write('{"err": 1, "msg": "pass is reuquired"}');
          //\w 匹配字母或数字或下划线或汉字  ^所有的
          // 
        }else if(!/^\w{8,32}$/.test(user)){
          response.write('{"err": 1, "msg": "invaild username"}');
        }else if(/['|"]$/.test(pass)){
          response.write('{"err": 1, "msg": "invaild password"}');
        }else if(users[user]){
          response.write('{"err": 1, "msg": "username already exsits"}');
        }else{
          users[user]=pass;
          response.write('{"err": 0, "msg": "success"}');
        }
        response.end();
        break;
      case '/login':    //登陆
        if(!user){
          response.write('{"err": 1, "msg": "user is reuquired"}');
        }else if(!pass){
          response.write('{"err": 1, "msg": "pass is reuquired"}');
        }else if(!/^\w{8,32}$/.test(user)){
          response.write('{"err": 1, "msg": "invaild username"}');
        }else if(/['|"]$/.test(pass)){
          response.write('{"err": 1, "msg": "invaild password"}');
        }else if(!users[user]){
          response.write('{"err": 1, "msg": "no this user"}');
        }else if(users[user]!=pass){
          response.write('{"err": 1, "msg": "username or password is incorrect"}');
        }else{
          response.write('{"err": 0, "msg": "login success"}');
        }
        response.end();
        break;
      default:          //其他：文件
        fs.readFile(`./wang${pathname}`, (err, data)=>{
          // console.log(pathname);
          if(err){
            response.writeHeader(404);
            response.write('Not Found');
          }else{
            response.write(data);
            
          }
          response.end();
        });
    }
  });
});
server.listen(8060);