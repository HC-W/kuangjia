import {change,total,radioArr,list} from "./3.js";
console.log(change,total,radioArr,list);
// export default class {
//     // 属性
//     constructor(title, total=0, status=0, list=[]) {
//         // title  ===> input change
//         this.title = title;
//         // total  ===> 目标总数
//         this.total = total;
//         // status ===> 状态
//         this.status = status;
//         // list  ===> 数据
//         this.list = list;
//     }
//     change() {
//         if (event.keyCode == 13) {
//             console.log(typeof(this.list));
//             this.title = event.target.value;
//             // console.log(event.target.value);     //输出的是change输入的值
//             // console.log(this.title);        //同上
//             // 0全部
//             // 1 已完成
//             // 3 未完成
//             // 为了目标页面的切换，所有为了获取状态，把添加进的数据化成对象
//             this.list.push({
//                 el:`
//                 <p status="${0}" style="overflow: hidden;">
//                     <p index=${this.list.length} onClick="mt.upStatus()" style="width:10px;height:10px;display:inline-block;background-color: dimgrey;float:left;" status="2"></p>
//                     <p style="float:left;">${this.title}</p>
//                     <p onClick="mt.del()" style="float:right;" index=${this.list.length}>X</p>
//                 </p>
//                 `,
//                 status:2
                
//             })
//             // 添加完数据之后，运行render,进行下面目标数据的刷新
//             this.render(this.list);
//         }
//     }

//     // 一个页面的更新
//     // list
//     render(l){
//         console.log(typeof(this.list));
//         // list.innerHTML = this.list.join(",");
//         // 递归===>条件  什么时候结束？===> i>length
        
//         function listStr(i,arr,str){
            
//             if(typeof arr[i] === "undefined"){
//                 return str;
//             }else{
//                 str += arr[i].el;
//                 i++;
//                 return listStr(i,arr,str);
//             }
//         }
//         list.innerHTML = listStr(0,l,"");
//     }
//     // 更新插入数据
//     upStatus(){
//         // 获取状态值
//         let s=event.target.getAttribute("status");
//         let index = event.target.getAttribute("index");     // 0/1/2
//         this.list[index].status=s==2?1:2;
//         console.log(s);
//         let status= s == 2?1:2;
//         event.target.style.backgroundColor= s==2?"red":"dimgrey";
//         event.target.setAttribute("status",status);
//     }
//     // 删除
//     del(){
//         let index = event.target.getAttribute("index");
//         console.log(index);
//         this.list[index].el="";
//         this.render(this.list);
//     }
//     radioChange(){
//         // 2、获取value 值
//         let val = event.target.value;
//         // console.log(val);
//         // console.log(this.list);

//         // 2、通过获取的value值过滤list
//         let arr=this.list.filter(
//             (value)=>{
//                 return val==0 || val == value.status;
//             }
//         );
//         // console.log(arr);
//         // 3、重新加载list页面
//         this.render(arr);
        
//     }
// }
// // 第一个坑点
// let mt = new Mt();
// console.log(mt);
// change.onkeydown = mt.change.bind(mt);
// for( let p in radioArr){
//     radioArr[p].onchange=mt.radioChange.bind(mt);
// }
