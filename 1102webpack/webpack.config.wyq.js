// 都用了 export 和export default 了,为什么还用 module.exports 
// 因为我们靠的是 webpack.config 来打包,但是没有人能够编译我,所以首先我得能被支持

// webpack.config.js 文件 和.babelrc文件是一样的意思
// webpack 默认调用 webpack.config.js 文件

// 将名字改为 webpack.config.wyq.js
// 如果名字不叫 webpack.config.js 的情况
//      使用命令 webpack --config (filename)
const path=require("path");
module.exports={
    // 单入口
    // entry:"./src/1.js",
    // 多入口
    entry:{
        "index":"./src/1.js",
        "main":"./src/main.js"
    },
    // 出口
    // output:{
    //     // 如果你没有dist 文件夹,它会帮你创建
    //     path:path.resolve("dist/"),
    //     // 文件名
    //     filename:"build.js"
    // }
    output:{
        path:path.resolve("dist/"),
        filename:"[name].build.js"
    }
}