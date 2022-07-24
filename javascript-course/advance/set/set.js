  // Create a Set
  const letters = new Set(["a","b","c"]);

  console.log('has() =>',letters.has("a"));
  console.log('values() =>',letters.values());
  console.log('size() =>',letters.size);

  letters.forEach (function(value) {
    console.log('loop =>',value);
  })


  // Create an Iterator
const myIterator = letters.values();

// List all Values
let text = "";
for (const entry of myIterator) {
    console.log('Iterator =>',entry);
}

console.log('has() =>',letters.has("a"));
letters.delete("a");
console.log('after delete a =>',letters.has("a"));
letters.add("a");
console.log('after add a =>',letters.has("a"));

letters.add("c");
console.log('after add c again =>',letters.values());




// const newSet2 = new WeakSet([3, 4, 5]); //Throws an error


let obj1 = {message:"Hello world"};
const newSet3 = new WeakSet([obj1]);
console.log('refrenced =>',newSet3.has(obj1)); // true

const newSet4 = new WeakSet([{message:"Hello world"}]);
console.log('not refrenced =>',newSet4.has({message:"Hello world"})); // false