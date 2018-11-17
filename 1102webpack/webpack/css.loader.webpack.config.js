const path=require("path");

module.exports={
    mode:"development",
    entry:{
        "main":"./src/css.js"
    },
    output:{
        path:path.resolve("dist"),
        filename:"[name].build.js"
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:["style-loader","css-loader"]
        }]
    }
}