import {firstName as fn, lastName as ln, year} from './export.js';
// export 导出的变量 <===>import{} 导入的变量
        // 需要命名一致   ===>麻烦
console.log(fn,ln,year);

import M from "./exportDefault.js";
let m=new M("wyq","16");
m.fn();