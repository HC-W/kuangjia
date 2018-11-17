const http=require("http");
const fs=require("fs");
const url=require("url");

let server=http.createServer(
    (request,response)=>{
        // console.log(url.parse(request.url,true));
        switch(url.parse(request.url,true).pathname){
            case "/www":
                response.write("wwww");
                response.end();
                break
            default:
                fs.readFile(request.url,(err,data)=>{
                    if(err){
                        console.log("cha");
                    }else{
                        response.write(data);
                    }
                    response.end()
                })
        }
    }
)

server.listen(8888);