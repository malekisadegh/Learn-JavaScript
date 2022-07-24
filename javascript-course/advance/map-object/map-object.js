const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2



const map3 = new WeakMap();
// map3.set('Value', 2.3); // Throws an error

let obj = {name:"Vivek"};
const map4 = new WeakMap();
map4.set(obj, {age:23});

console.log('by refrence => ', map4.get(obj))
console.log('no refrence => ',map4.get(age))