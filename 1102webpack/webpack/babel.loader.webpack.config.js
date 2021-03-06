const path=require("path");
module.exports={
    mode:"development",
    entry:"./src/es6.js",
    output:{
        path:path.resolve("dist"),
        filename:"build.js"
    },
    // 配置loader的地方
    module:{
        // 规则
        rules:[
            {
                // 检测名
                test:/\.js$/,
                // 排除node_modules里面的东西
                exclude:/node_modules/,
                // 使用的loader
                // use:"babel-loader"
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["env"]
                    }
                }
            }
        ]
    }
}