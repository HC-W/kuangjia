const f=require("fs");

f.readFile("1.png",(err,data)=>{
    f.writeFile("2.png",data,(err)=>{
        if(err){
            console.log("错了吧，哈哈哈！");
        }else{
            console.log("成功！");
        }
    })
})