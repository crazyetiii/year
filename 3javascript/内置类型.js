// Filename: 内置类型
// Created by: lhy
// Date: 2024/11/7
// Project: 3javascript
// IDE: WebStorm

let a = 100;
let b = 3.14;
console.log(typeof a);
console.log(typeof b);
console.log(Number.MIN_VALUE, Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 10000000000);
console.log(Number.MAX_VALUE + Number.MAX_VALUE);
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // 数据过大时,失去精度

let big = 99999999999999999999999999999999999999999999999999999999n; //大整数只能减去大整数。只能处理大整数。
console.log(big-100n);

console.log(BigInt("100"));

console.log(0b100, 0o100, 0x100);

console.log("\t", "x'j\"\nb");
console.log("123\
456\
789");

console.log(`xj  
b`);  //原样输出

let name="lhy"
let age="30"
console.log(`name=${name},age=${age}`) // 模版字符串

console.log(true,false)
console.log(null);
console.log(undefined);
console.log(typeof "xjb")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null) // 返回object,但是null没有方法使用

console.log(true.toString());

