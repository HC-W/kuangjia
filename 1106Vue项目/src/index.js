import User from "./one/one";
let router=new VueRouter({
    // 路由的映射表
    routes:[
        {
            path:"/:id",
            component:User
        }
    ]
})

var app = new Vue({
    el:'#app',
    data: {
        imgList: [],
        getImgUrl: 'https://cnodejs.org/api/v1/topics'    //存数据接口               
    },
    created: function () {
        this.getImg()             //定义方法
    },
    methods: {
        getImg: function () {
            var that = this;
            that.$http({           //调用接口
                method: 'GET',
                url: this.getImgUrl  //this指data
            }).then(function (response) {  //接口返回数据
                this.imgList = response.data.data;
            }, function (error) {
            })
        },
    },
    router
})