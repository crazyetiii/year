// 方式1,需要的变量和函数前加export
// export let str = "xjb"
//
// export function f() {
//     return str
// }

// // 方式2:统一导出
// let str = "xjb"
//
// function f() {
//     return str
// }
//
// export {str, f}

//方式3:default导出
let str = "xjb"

function f() {
    return str
}

export default {
    xx: str,
    yy: f
}