const path=require("path");
const webpack=require("webpack");

module.exports={
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve("dist"),
        filename:"build.js"
    },
    module:{
        rules:[
            {
                test:/.js$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        parset:["env"]
                    }
                }
            },
            {
                test:/.css$/,
                use:{
                    loader:"style-loader!css-loader"
                }
            }
        ]
    }
}