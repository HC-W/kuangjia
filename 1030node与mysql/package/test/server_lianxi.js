const http = require('http');
const mysql = require('mysql');
//静态资源  ==>  html文件夹
const fs = require('fs');
//解析URL模块
const url = require('url');
//签名模块
const md5 = require('crypto');

let Md5 = (str) =>{
    let mt = md5.createHash('md5');
    mt.update(str);
    return mt.digest('hex');
} 

let key ='wanghuichao';
//密码 ！== sql密码
// let ne=Md5(Md5("wang")+key);
// console.log(ne);


let db = mysql.createPool(
    {
        host:'localhost',
        port:3306,
        user:'root',
        password:'',
        database:'zzq_wyq'
    }
    
);

// SQL 注入  :要是你没有判断，用户蒙中一个，库就删了，你就凉凉了

// db.query(`INSERT INTO user_table (ID,NAME,PASS]) VALUES(${NAME})`)
// NAME 
// ===>
// WYQ'); DELECT FORM USER_TABLE;


let server=http.createServer((request,response)=>{
    // url分为两种：一种是静态资源   另一种是接口
    // pathname
    // console.log(url);
    // console.log(request.url);
    // console.log(url.parse(request.url,true));
    let {pathname:Url,query:data}=url.parse(request.url,true);
    // console.log(Url,data);

    let {user,pass}=data;
    switch(Url){
        case "/login":
                // 判断输入为空
                if (!user) {
                    response.write('{"err":0,"msg":"user is null"}');
                    response.end();
                }else if(!pass){
                    response.write('{"err":0,"msg":"password is null"}')
                    response.end();
                    // 判断输入长度
                }else if(!/^\w{3,10}$/.test(user)){
                    response.write('{"err":0,"msg":"user length 3-10"}')
                    response.end();
                }else if(!/^\w{6,15}$/.test(pass)){
                    response.write('{"err":0,"msg":"pass length 6-15"}')
                    response.end();
                    
                }
                // 判断sql注入
                // else if(/['|"]/.test(user) || /['|"]/.test(pass)){
                //     response.write('{"err":0,"msg":" sql 注入"}')
                //     response.end();
                // }
                else{  
                     //  根据输入的用户名查找对应的数据
                    db.query( `SELECT name,pass FROM user_table WHERE name='${user}';`,(err,data) => {
                        //data有关
                        // 报错
                        if (err) {
                            response.write('{"err":0,"msg":"select database error"}');
                            response.end();
                            // 查找有此值
                        }else if(data.length > 0){
                            // 取出数据库中的密码数据
                            let passw=data[0].pass;
                            // 将用户地输入密码进行加密
                            let mdpass=Md5(Md5(`"${pass}"`)+key);
                            // 当两者的值相等时，说明数值对应
                            if(mdpass===passw){
                                response.write('{"err":1,"msg":"success"}');
                                response.end();
                            }
                        }else{
                            response.write('{"err":0,"msg":"no this user"}');
                            response.end();
                        }
                    })
                }
            break
        case "/reg":
            // 避免懒，该检测的东西都检测
            // 前台发的东西 一个字都不能信
            if (!user) {
                response.write('{"err":0,"msg":"user is null"}');
                response.end();
            }else if(!pass){
                response.write('{"err":0,"msg":"password is null"}')
                response.end();
                // 判断输入长度
            }else if(!/^\w{3,10}$/.test(user)){
                response.write('{"err":0,"msg":"user length 3-10"}')
                response.end();
            }else if(!/^\w{6,15}$/.test(pass)){
                response.write('{"err":0,"msg":"pass length 6-15"}')
                response.end();
            }else if(/['|"]/.test(user) || /['|"]/.test(pass)){
                response.write("{'err':0,'msg':'sql注入'}");
                response.end();
            }else{
                db.query(`SELECT name,pass FROM user_table WHERE name='${user}';`,(err,data)=>{
                        if(err){
                            response.write("{'err':0,'msg':'database error'}");
                            response.end();
                        }else if(data.length>0){
                            response.write("{'err':0,'msg':'user is exsits'}");
                            response.end();
                        }else{
                            let mdpass=Md5(Md5(`"${pass}"`)+key);
                            db.query(`INSERT INTO user_table(ID,name,pass) VALUES(0,'${user}','${mdpass}');`,
                            (err,data)=>{
                                if(err){
                                    response.write('{"err":0,"msg":"database error"}');
                                    response.end();
                                }else{
                                    response.write('{"err":1,"msg":"success"}');
                                    response.end();
                                }
                            });
                        }
                    }
                );
            }
            break
        default:
            fs.readFile(`./html${Url}`,(err,data) => {
                if (err) {
                    response.writeHead(404);
                    response.write('hhhh');
                    response.end();
                } else {
                    response.write(data);
                    response.end();
                }
            })
    }
    // response.write("1111");
    // response.end();
}).listen(8083);




// const http = require('http');
// const mysql = require('mysql');
// //静态资源  ==>  html文件夹
// const fs = require('fs');
// //解析URL模块
// const url = require('url');
// //签名模块
// const md5 = require('crypto');

// let Md5 = (str) =>{
//     let mt = md5.createHash('md5');
//     mt.update(str);
//     return mt.digest('hex');
// } 

// let key ='wanghuichao';
// //密码 ！== sql密码
// // let ne=Md5(Md5("wang")+key);
// // console.log(ne);


// let db = mysql.createPool(
//     {
//         host:'localhost',
//         port:3306,
//         user:'root',
//         password:'',
//         database:'zzq_wyq'
//     }
    
// );

// // SQL 注入

// // db.query(`INSERT INTO user_table (ID,NAME,PASS]) VALUES(${NAME})`)
// // NAME 
// // ===>
// // WYQ'); DELECT FORM USER_TABLE;

// let server = http.createServer(
//     (req,res) => {
//         //url
//         //一种 静态资源
//         //另一种 接口
//         //pathname
//         let {pathname:Url,query:data} = url.parse(req.url,true);
//         // console.log(url,data);
//         let {user,pass} = data;
//         // let mdpass=Md5(Md5(`${pass}`)+key);
//         // console.log(mdpass);
//         switch(Url){
//             case '/login':
//             // 判断输入为空
//                 if (!user) {
//                     res.write('{"err":0,"msg":"user is null"}');
//                     res.end();
//                 }else if(!pass){
//                     res.write('{"err":0,"msg":"password is null"}')
//                     res.end();
//                     // 判断输入长度
//                 }else if(!/^\w{3,10}$/.test(user)){
//                     res.write('{"err":0,"msg":"user length 3-10"}')
//                     res.end();
//                 }else if(!/^\w{6,15}$/.test(pass)){
//                     res.write('{"err":0,"msg":"pass length 6-15"}')
//                     res.end();
                    
//                 }
//                 // 判断sql注入
//                 // else if(/['|"]/.test(user) || /['|"]/.test(pass)){
//                 //     res.write('{"err":0,"msg":" sql 注入"}')
//                 //     res.end();
//                 // }
//                 else{  
//                      //  根据输入的用户名查找对应的数据
//                     db.query( `SELECT name,pass FROM user_table WHERE name='${user}';`,(err,data) => {
//                         //data有关
//                         // 报错
//                         if (err) {
//                             res.write('{"err":0,"msg":"select database error"}');
//                             res.end();
//                             // 查找有此值
//                         }else if(data.length > 0){
//                             // 取出数据库中的密码数据
//                             let passw=data[0].pass;
//                             // 将用户地输入密码进行加密
//                             let mdpass=Md5(Md5(`"${pass}"`)+key);
//                             // 当两者的值相等时，说明数值对应
//                             if(mdpass===passw){
//                                 res.write('{"err":1,"msg":"success"}');
//                                 res.end();
//                             }
//                         }else{
//                             res.write('{"err":0,"msg":"no this user"}');
//                             res.end();
//                         }
//                     })
//                 }
//                 break
//             case '/reg':
//                 //避免懒
//                 //写的多是好事  
//                 //前端发送的东西  一个字都不要信
//                 if (!user) {
//                     res.write('{"err":0,"msg":"user is null"}');
//                     res.end();
//                 }else if(!pass){
//                     res.write('{"err":0,"msg":"password is null"}')
//                     res.end();
//                 }else if(!/^\w{3,10}$/.test(user)){
//                     res.write('{"err":0,"msg":"user length max"}')
//                     res.end();
//                 }else if(!/^\w{6,15}$/.test(pass)){
//                     res.write('{"err":0,"msg":"pass length max"}')
//                     res.end();
//                 }else if(/['|"]/.test(user) || /['|"]/.test(pass)){
//                     res.write('{"err":0,"msg":" sql 注入"}')
//                     res.end();
//                 }else{                   
//                     db.query( `SELECT name,pass FROM user_table WHERE name='${user}';`,(err,data) => {
//                         //data有关
//                         if (err) {
//                             res.write('{"err":0,"msg":"select database error"}');
//                             res.end();
//                         }else if(data.length > 0){
//                             res.write('{"err":0,"msg":"user is exsits"}');
//                             res.end();
//                         }else{
//                             let mdpass=Md5(Md5(`"${pass}"`)+key);
//                             // console.log(mdpass);
//                             db.query(`INSERT INTO user_table(ID,name,pass) VALUES(0,'${user}','${mdpass}');`,(err,data) => {
//                                 if (err) {
//                                     res.write('{"err":0,"msg":"database is exsits"}');
//                                     res.end();
//                                 } else {
//                                      res.write('{"err":1,"msg":"success"}');
//                                      res.end();
//                                 }
//                             })
//                         }
//                     })
//                 }
//                 break
         
//                 default:
//                 fs.readFile(`./html${Url}`,(err,data) => {
//                     if (err) {
//                         res.writeHead(404);
//                         res.write('hhhh');
//                         res.end();
//                     } else {
//                         res.write(data);
//                         res.end();
//                     }
//                 })
//         }  
//     }
// ).listen(8083);
