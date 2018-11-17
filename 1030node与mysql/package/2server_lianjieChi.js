const mysql=require("mysql");
// 一个数据库 对应多个服务器(的访问)

// 整个服务器 只有一个数据库连接

// 连接池 ： 比如说阿里数据库有10个连接口，如果淘宝占用了一个，则还有9个，天猫再占用一个，则还有8个
//              连接池对外开辟了10个连接管道===>你来用了就拿走，用完再拿回来
//              如果你10个连接口还不够用，那就不是连接池的问题了，而是数据库的问题，回去整整数据库吧
//          如果你对外开了100个连接池，数据库在维护的连接过多，它就慢了
// createPool : 默认给你提供10个连接口
let db=mysql.createPool({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"",
    // 数据库名称
    database:"zzq_wyq",
    // 连接池最大连接数
    maxConnection:5
})
// 删除
db.query(`DELETE FROM user_table WHERE id=3`,(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

// id 事情
//  id 删除重置这说是不存在的：id的值就算这条数据删除了，占用的数值仍然存在，在此添加数值时是顺下去的
// 物理删除和逻辑删除
// 物理删除 ： 当前这个主数据库里面这个数据没有了（真的没有了）==>减轻了主数据库的压力
        // ===>但是这条数据并不是真的消失了，而是存储到了一个归档的库中
// 逻辑删除：if else  idDel  0==>1   删除后数值从0变成了1