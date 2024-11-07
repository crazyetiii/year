// Filename: 包装类型
// Created by: lhy
// Date: 2024/11/7
// Project: 3javascript
// IDE: WebStorm


let a = 100;
console.log(a,typeof a);
a = a.toString();
console.log(a,typeof a); //原始的类型不会变。

console.log(String(null));
console.log(String(undefined));

console.log(Number.parseInt("100") + 50);
console.log(Number("100") + 50);
console.log(Number(null)); // null,空串,纯空格的字符串 转数字,输出0
console.log(Number(undefined)); //undefined转数字,输出NaN

console.log(Number.parseInt("100", 16));
console.log(Number.parseInt("100a100")); // 只匹配第一个\d+
console.log(Number.parseInt("0x100"));
console.log(Number.parseInt("100", 3));//支持4进制

console.log(Boolean(0.1)); //除false,null,NaN,undefined,0,-0,"" 七种外都是真

// 算术运算符
// let c=0;
// console.log(c = 100);

console.log(`43天有${Math.floor(43 / 7)}周${43 % 7}天`)

let n = 4725
let h = n / 3600;
let m = n % 3600;
let m_ = m / 60;
let s = m % 60;
console.log(`${n}中,${Math.floor(h)}时,${Math.floor(m_)}m,${s}s`)