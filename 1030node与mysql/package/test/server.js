// 1.引入模块
const http=require('http');
const mysql=require('mysql');
const fs=require('fs');
const url=require('url');
const zlib=require('zlib');
const crypto=require('crypto');

const _key='sadfslekrtuew5iutoselgdtjiypoydse4ufhs.edtyo;s8te4arfeliawkfhtsie5tlfia;sefdshroiupeoutwyeli5gurse;ihf';

function md5(str){
  let obj=crypto.createHash('md5');

  obj.update(str);

  return obj.digest('hex');
}

function md5_2(str){
  return md5(md5(str)+_key);
}

// 连接数据库
let db=mysql.createPool({host: 'localhost', port: 3306, user: 'root', password: '', database: 'zzq_wyq'});
// 创建一个服务器
//  1 接口
//  2 静态资源文件
let server=http.createServer((req, res)=>{
  // pathname /www
  // query  参数
  let {pathname, query}=url.parse(req.url, true);
  // 账号 密码
  let {user, pass}=query;

  // 补充   知识点
  // sql 注入
  // user = "wyq"); delete * from user_table; "
  // db.query  


  switch(pathname){
    //接口
    case '/reg':
      //校验
      if(!user){
        res.write('{"err": 1, "msg": "name can\'t null"}');
        res.end();
      }else if(!pass){
        res.write('{"err": 1, "msg": "pass can\'t null"}');
        res.end();
      }else if(!/^\w{4,16}$/.test(user)){
        res.write('{"err": 1, "msg": "name is invaild"}');
        res.end();
      }else if(/['|"]/.test(pass)){
        res.write('{"err": 1, "msg": "pass is invaild"}');
        res.end();
      }else{
        // 用户名 不能重复
        db.query(`SELECT * FROM user_table WHERE name='${user}'`, (err, data)=>{
          if(err){
            res.write('{"err": 1, "msg": "database error"}');
            res.end();
          }else if(data.length>0){
            res.write('{"err": 1, "msg": "this name exsits"}');
            res.end();
          }else{
            db.query(`INSERT INTO user_table (ID,name,pass) VALUES(0,'${user}','${md5_2(pass)}')`, (err, data)=>{
              if(err){
                res.write('{"err": 1, "msg": "database error"}');
                res.end();
              }else{
                res.write('{"err": 0, "msg": "success"}');
                res.end();
              }
            });
          }
        });
      }
      break;
    case '/login':
      //校验
      if(!user){
        res.write('{"err": 1, "msg": "name can\'t null"}');
        res.end();
      }else if(!pass){
        res.write('{"err": 1, "msg": "password can\'t null"}');
        res.end();
      }else if(!/^\w{4,16}$/.test(user)){
        res.write('{"err": 1, "msg": "name is invaild"}');
        res.end();
      }else if(/['|"]/.test(pass)){
        res.write('{"err": 1, "msg": "pass is invaild"}');
        res.end();
      }else{
        db.query(`SELECT * FROM user_table WHERE name='${user}'`, (err, data)=>{
          if(err){
            res.write('{"err": 1, "msg": "database error"}');
            res.end();
          }else if(data.length==0){
            res.write('{"err": 1, "msg": "no this name"}');
            res.end();
          }else if(data[0].password!=md5_2(pass)){
            res.write('{"err": 1, "msg": "name or password is error"}');
            res.end();
          }else{
            res.write('{"err": 0, "msg": "success"}');
            res.end();
          }
        });
      }
      break;
    default:
      //缓存      TODO
      //静态文件  gizp 压缩  服务端 优化 kb
      // let rs=fs.createReadStream(`www${pathname}`);
      // let gz=zlib.createGzip();

      // res.setHeader('content-encoding', 'gzip');
      // rs.pipe(gz).pipe(res);

      // rs.on('error', err=>{
      //   res.writeHeader(404);
      //   res.write('Not Found');
      //   res.end();
      // });

      // 山寨实现
     fs.readFile(`www${pathname}`,(err,data) => {
          if(err){
              res.writeHeader(404);
              res.write('Not Found');
              res.end();
          }else{
            res.write(data);
            res.end();
          }
      })
  }
});
server.listen(8080);
