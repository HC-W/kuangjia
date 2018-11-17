// let obj=require("homework");
// console.log(obj);
// 根据地名首字母进行排序
// function sortSm(a,b){  
//     return a.py.charCodeAt(0)-b.py.charCodeAt(0); 
//  }
// let sm=obj.sort(sortSm);
// // console.log(sm); 

//  // id进行整体排序
//  function sortId(a,b){  
//     return a.id-b.id  
//  } 

// // 判断终端的输入值并返回相应的数据
// const readline = require('readline');  
// const rl = readline.createInterface({  
//     input: process.stdin,  
//     output: process.stdout  
// });  
// // console.log(rl);
// rl.on('line', function (input) {
//     let arr=[];
//     obj.forEach(element => {
//         if(element.py.startsWith(input)){
//             arr.push(element);
//         }
//     });
//     let el=arr.sort(sortId);
//     console.log(el);
//     rl.close();
// });  
  
// rl.on('close', function() {  
//     console.log('程序结束');  
//     process.exit(0);  
// });  





const wang=require("homework");
wang.FilterCity("a");
// console.log(wang);



