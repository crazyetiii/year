// import * as mm from './导出模块.js'

// // 方式1,2使用
// console.log(mm.f());
//
// // 方式3使用
// console.log(mm.default.xx);
// console.log(mm.default.yy());


// 导入的方式:
// // 1.用谁导谁
// import {f} from './导出模块.js'
// console.log(f());
// // 2.用谁导谁+别名
// import {f as yy} from './导出模块.js'
// console.log(yy());

// 3.default改别名
import {default as ss} from './导出模块.js'
console.log(ss.yy());

// 4.条件导包
let x=200
if (x === 200) {
    import("./导出模块.js").then((x) => {
        console.log(x.default.xx)
    })
}






