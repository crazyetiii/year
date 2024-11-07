var map = new Map();
map.set('id', '1');
map.set(100, 200);
console.log(map);

var from = Array.from(map);
console.log(from);

let arr2 = [...map];
console.log(arr2);

let map1 = new Map([[ 'id', '1' ], [ 100, 200 ]]);
console.log(map1);

for (const mapKey of map) {
    console.log(mapKey, mapKey[0], mapKey[1]);
}


for (const mapKey of map.entries()) {
    console.log(mapKey, mapKey[0], mapKey[1]);
}

for (const mapKey of map.keys()) {
    console.log(mapKey);
}

for (const mapKey of map.values()) {
    console.log(mapKey);
}

map.forEach((k, v) => {
    console.log(v, k);
});

let obj = {name: "xjb"}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.fromEntries(map))

let set = new Set();
set.add(100);
set.add(100);
set.add(200);

console.log(set);
console.log(set.has(100));
// set.delete(100);
// console.log(set);

console.log([...set]); //set 2 数组
console.log(new Set([100,200,100])); // 数组 2 set


for (const setElement of set.entries()) {
    console.log(setElement);
}
set.forEach((e) => {
    console.log(e);
})








