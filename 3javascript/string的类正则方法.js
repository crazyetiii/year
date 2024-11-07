let str = 'xiaojianbang';
console.log(str.replace("an", "xx"));
console.log(str.replaceAll("an", "xx"));
console.log(str.replace(/an/g, "xx"));

console.log(str.match(/an/gi));
console.log(...str.matchAll(/an/gi)); // ... 展开迭代器
console.log(str.search(/\d/gi)); //输出第一个开始的地方

console.log(...str.split('a'));


str = 'xiaojianbang';
let ret = '';
for (let i = 0; i < str.length; i++) {
    let message = str.charCodeAt(i);
    ret += message + ",";
}
console.log(ret); // 输出对应的ascii码

console.log(String.fromCharCode(120, 105, 97, 111, 106, 105, 97, 110, 98, 97, 110, 103));

console.log(encodeURIComponent("小肩膀"));

console.log(parseInt("16"));
console.log(parseFloat("16.12"));
console.log(isNaN(undefined));
