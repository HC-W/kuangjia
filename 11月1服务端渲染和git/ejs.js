const ejs=require("ejs");

ejs.renderFile("./template/ejs/1.html",{
    str:"快吃饭了，好饿啊！",
    hl:"<b>我不是标签</b>",
    arr:[1,2,3,4,5],
    fter:"./components/footer.html"
}).then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err);
})