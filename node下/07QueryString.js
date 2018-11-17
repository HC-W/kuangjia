// QueryString  ===> 解析 URL? 后面的东西
// QueryString 现在没有URL好用（用得多）
const query=require("querystring");
let str="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=RNG&rsv_pq=fff076180000520b&rsv_t=1487mCccMTqoksNpTgcl7qxvgEWmC7gIb52WkJtKnxH57Ir3dv6qIAGr584&rqlang=cn&rsv_enter=1&rsv_sug3=16&rsv_sug1=27&rsv_sug7=101&rsv_sug2=0&inputT=7023&rsv_sug4=8549";
let obj=query.parse(str);
console.log(obj);