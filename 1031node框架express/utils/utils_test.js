module.exports=(req,res,next)=>{
    req.test=(user)=>{
        if(!user){
            res.write('{"err":0,"msg":" user is null"}');
            res.end();
        }else if(!/^\w{3,15}$/.test(user)){
            res.write('{"err":0,"msg":"user length max"}');
            res.end();
        }else if(/['|"]/.test(user)){ 
            res.write('{"err":0,"msg":"sql 注入"}');
            res.end();
        }else{
            return 1;
        }
    }
    next();
}