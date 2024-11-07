// 正则表达式
let str = "xiao123j456ianbang0123"
let str1 = "xiaojianbang"
// let reg = new RegExp("\\d+", "i") // 需要转义\
let reg = /[^a-z]+/ig // 隐式定义正则表达式,不需要转义\
console.log(reg.exec(str));
console.log(reg.exec(str)); //使用g时候需要自己while.取结果
console.log(reg.exec(str));

let ret=null;
while (ret = reg.exec(str)) {
    console.log(ret)
}
console.log(reg.test(str1));
console.log(reg.exec(str1));

str = `
<p>
<div>
erte5yrtyrtgfnjvhjghj
<a href="http://www.xiaojianbang.vip">小府膀教育</a>
<a href="http://www.baidu.com">百度</a>
<a href="http://www.qq.com">QQ</a>
ddghrutyutyu
</div>
`

// 正则表达式 高级用法
// 1.()子表达式
reg = /<a href="http:\/\/(.*?)">(.*?)<\/a>/igs
ret = null;
while (ret = reg.exec(str)) {
    console.log(ret[2], ret[1])
}

// 2. () 分组,捕获内容
// 3. (?:)分组,但是不捕获内容
str = 'a13123xiaoj65a1x546ax54iaaooxn456ba000ng879879';
let reg1 = /a(?:\d+|oo)x/igs;
let reg2 = /a\d+|oox/igs;
let retval = null;
while (retval = reg1.exec(str)) {
    console.log(retval);
}
console.log("\n\n");
while (retval = reg2.exec(str)) {
    console.log(retval);
}

// 匹配aabb形式
// 4.反向引用   (.)\1 \1引用第一个匹配的结果
str = 'aaa113123xiaoojj65a1x546ax54iaaooxn45666ba000ng87988779';
reg1 = /(.)\1\1/igs;
retval = null;
while (retval = reg1.exec(str)) {
    console.log(retval);
}

// 5.零宽断言
// 5.1 反向零宽断言 在匹配到的东西前限定条件,可以加正则
str = 'xiao33jianbang1an2an33an';
reg1 = /(?<=\d+)[^0-9]{2}/igs;
retval = null;
while (retval = reg1.exec(str)) {
    console.log(retval);
}


// 5.2 正向零宽断言 在匹配到的东西前限定条件,可以加正则
const regex = /abc(?=1)/g; // 匹配 'abc'，但只在后面跟着 '123' 的情况下

const testString1 = "abc123"; // 匹配成功
const testString2 = "abc456"; // 不匹配
const testString3 = "xyzabc123"; // 匹配成功，'abc' 在 'xyz' 后面

console.log(testString1.match(regex)); // 输出: ['abc']
console.log(testString2.match(regex)); // 输出: null
console.log(testString3.match(regex)); // 输出: ['abc']

//  6.给分组起名字
// (?<url>.*?)   ?<name>

str = `
<p>
<div>
erte5yrtyrtgfnjvhjghj
<a href="http://www.xiaojianbang.vip">小府膀教育</a>
<a href="http://www.baidu.com">百度</a>
<a href="http://www.qq.com">QQ</a>
ddghrutyutyu
<img>
`
reg = /<a href="http:\/\/(?<url>.*?)">(?<text>.*?)<\/a>/igs
ret = null;
while (ret = reg.exec(str)) {
    console.log(ret.groups.url)
    console.log(ret.groups.text)
}

