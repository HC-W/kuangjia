const path=require("path");
const webpack=require("webpack");

module.exports={
    mode:"development",
    entry:"./src/class.js",
    output:{
        path:path.resolve("dist/"),
        filename:"build.js"
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        // 静态资源的目录
        contentBase:path.resolve("static"),
        // 端口
        port:8027,
        // 热更新
        hot:true,
        // 历史接口 失败后能回退
        //  专门针对路由进行处理，并且这个路由是前台路由
        historyApiFallback:true
    }
}