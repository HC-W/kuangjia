import User from "./component/user";
import Topic from "./component/topic";
let router=new VueRouter({
    // 路由的映射表
    routes:[
        {
            path:"/user",
            component:User
        },
        {
            path:"/topic",
            component:Topic
        }
    ]
})
let app=new Vue({
    el:"#app",
    data:{
        name:"wang"
    },
    router
})