let str = new String("xjb");
console.log(str.length);

let str2 = "xjb";
console.log(str2.length);

console.log(str2.charAt(0));
console.log(str2[0]);

console.log(str2.concat("123", "456"));
console.log(str2.startsWith("x"));
console.log(str2.endsWith("b"));
console.log(str2.indexOf("b"));
console.log(str2.indexOf("a"));

console.log(str2.lastIndexOf("b"));
console.log(str2.lastIndexOf("a"));

console.log(str2.padStart(10,"0"));

let str1="9"
let str3="99"
let str4="999"
console.log(str1.padStart(3,"0"));
console.log(str3.padStart(3,"0"));
console.log(str4.padStart(3,"0"));

console.log(str2.repeat((3)));
console.log(str2.slice(0,2));

console.log(str2.valueOf());