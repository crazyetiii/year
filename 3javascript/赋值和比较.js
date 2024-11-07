// Filename: 赋值和比较
// Created by: lhy
// Date: 2024/11/7
// Project: 3javascript
// IDE: WebStorm

// 连续赋值
let a, b, c
a = b = c = 100;
console.log(a, b, c)

// 空赋值,懒得写判断
let x;
x ??= 100
console.log(x)

// == 会进行类型转换,===不会转换
console.log(null == undefined)
console.log(null === undefined)
// NaN和谁都不相等
console.log(NaN === NaN)
