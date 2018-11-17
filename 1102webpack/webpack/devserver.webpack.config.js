const path=require("path");
const webpack=require("webpack");

module.exports={
    // Set 'mode' option to 'development'   开发环境
    // or 'production'    生产环境
    mode:"development",
    entry:"./src/1.js",
    output:{
        path:path.resolve("dist/"),
        filename:"build.js"
    },
    // 热更新 webpcak.dev.server
    // webpack --config devserver.webpack.config.js
    // webpack-dev-server --config devserver.webpack.config.js

    // webpack-dev-server --inline --config devserver.webpack.config.js
    // --inline(直接刷新整个页面)  
    // --iframe(把我们当前的页面放到iframe里面，然后刷新iframe)


    // 放插件的区域：热更新需要一个插件===>(热模块更新)
    // 除配置文件以外，模块文件更新，会自动更新
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        // 静态资源的目录
        contentBase:path.resolve("static"),
        // 端口
        port:8026,
        // 热更新
        hot:true,
        // 历史接口 失败后能回退
        //  专门针对路由进行处理，并且这个路由是前台路由
        historyApiFallback:true
    }
}