// Sets 

const letters = new Set(["a", "b", "c"]);
letters.add(2);
letters.add(true);
letters.add(77);
letters.add("Hello");

console.log(letters);

letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

console.log(letters);

let text = "";
for (const x of letters) {
    text += x + " ";
}
console.log(text);

let text2 = ""
letters.forEach(function (value) {
    text2 += value + " ";
})

console.log(text2)

console.log(typeof letters)
console.log(letters instanceof Set);

console.log(letters.has("2"))
console.log(letters.has(2))
console.log(letters.has("d"))


const myIterator = letters.values();
console.log(myIterator)


const myIterator2 = letters.keys();
console.log(myIterator2)


const myIterator3 = letters.entries();
console.log(myIterator3)


console.log("set size" , letters.size)

// Map 

const fruits = new Map([
    ["apples", 400],
    ["bananas", 300],
    ["oranges", 200],
    ["papaya", 100]
  ]);

fruits.set("Guava", 500);
fruits.set("Kiwi", 350);

console.log(fruits)

fruits.set("apples", 200);
console.log(fruits)


console.log(fruits.get("apples"))
console.log(typeof fruits)
console.log(fruits instanceof Map);

console.log("map size", fruits.size)

fruits.delete("apples");
console.log(fruits)

console.log(fruits.has("apples"));


fruits.forEach(function(value, key){
    console.log(key, " " , value);
})

const ent= fruits.entries;

console.log(ent)
fruits.forEach(function(entry){
    console.log(entry)
})


// ent.forEach(function(entry){
//     console.log(entry)
// })

const key = fruits.keys();
console.log(key);

const value = fruits.values();
console.log(value);

const student = {name: "Gauri", age : 22};
fruits.set(student, 1000);
console.log(fruits.get(student))

fruits.clear();
console.log(fruits)


const fruitQuant = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by Quantity
  const result = Map.groupBy(fruitQuant, myCallback);
  console.log(result)