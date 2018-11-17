const http=require('http');
const url=require('url');
const querystring=require('querystring');
const fs=require('fs');

let users={
 'wyq': '123456',
 'ldx': '654321'
};


/// 这里面不能 写断言  ===> 因为错误 不能往自己身上揽
let server=http.createServer((req, res)=>{
  //GET
  // pathname   /www
  // query   data  ===>{}
  console.log(req.url);
  let {pathname, query}=url.parse(req.url, true);

  //POST
  let str='';
  req.on('data', data=>{
    str+=data;
  });
  req.on('end', ()=>{
    let post=querystring.parse(str);

    let {user, pass}=query;

    //写东西
    //安全性这个问题  后端如果不安全，99%都是因为懒
    switch(pathname){
      case '/reg':      //注册
        if(!user){
          res.write('{"err": 1, "msg": "user is required"}');
        }else if(!pass){
          res.write('{"err": 1, "msg": "pass is required"}');
          //\w 匹配字母或数字或下划线或汉字  ^所有的
          // 
        }else if(!/^\w{8,32}$/.test(user)){
          res.write('{"err": 1, "msg": "invaild username"}');
        }else if(/^['|"]$/.test(pass)){
          res.write('{"err": 1, "msg": "invaild password"}');
        }else if(users[user]){
          res.write('{"err": 1, "msg": "username already exsits"}');
        }else{
          users[user]=pass;
          res.write('{"err": 0, "msg": "success"}');
        }
        res.end();
        break;
      case '/login':    //登陆
        if(!user){
          res.write('{"err": 1, "msg": "user is required"}');
        }else if(!pass){
          res.write('{"err": 1, "msg": "pass is required"}');
        }else if(!/^\w{8,32}$/.test(user)){
          res.write('{"err": 1, "msg": "invaild username"}');
        }else if(/^['|"]$/.test(pass)){
          res.write('{"err": 1, "msg": "invaild password"}');
        }else if(!users[user]){
          res.write('{"err": 1, "msg": "no this user"}');
        }else if(users[user]!=pass){
          res.write('{"err": 1, "msg": "username or password is incorrect"}');
        }else{
          res.write('{"err": 0, "msg": "login success"}');
        }
        res.end();
        break;
      default:          //其他：文件
        fs.readFile(`./www${pathname}`, (err, data)=>{
          if(err){
            res.writeHeader(404);
            res.write('Not Found');
          }else{
            res.write(data);
          }
          res.end();
        });
    }
  });
});
server.listen(8080);
