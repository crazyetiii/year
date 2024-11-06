// let a = 4;
// // let y = (--a) //先减 再赋值
// // let z = (a--) // 先赋值,在建
// let y1 = (--a) + (a--) + (a * 10) // 26
//
// // 3
// console.log(a, y1)

// let a = 6;
// let b = 10;
// let c = a++ + b + ++a + b++ + ++b + a
// // 6/7 10 8/8 10/11 12/12 8
// // 6+10+8+10+12+8=54
// console.log(c);

// let a = 1;
// // 1/2 + 3/3+30+3/4
// // 1+3+30+3=37
// console.log(a++ + ++a + a * 10 + a++, a);
//
// let b = 1;
// // 1/2 + (3/3 + 3)*10 + 3/4
// // 1+(3+3)*10+3=64,4
// console.log(b++ + (++b + b) * 10 + b++, b);


// 连续赋值
let a, b, c;
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