const mysql=require("mysql");
// 连接数据库
let db=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"",
    // 数据库名称
    database:"zzq_wyq"
});
// 执行mysql
db.query(`INSERT INTO user_table (id,name,age) VALUES(0,"洛溪",15)`,(err,data)=>{
    if(err){
        console.log("error"+err);
    }else{
        console.log(data);
    }
});