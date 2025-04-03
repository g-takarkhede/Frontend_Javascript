console.log("Hello World");


let x = 5;
let y = 6;
const z = x + y;

console.log(z);

y = 10;
console.log(y);

// const x = 4;
// var x = 4; Cannot redeclare block-scoped variable 'x'.

a = 5;
console.log(a);

// let a;
// console.log(a);

let b = 6;
console.log(b);

b = 7;
console.log(b);

console.log(c);

c = 11;
var c = 10;
console.log(c);

x = 2 + 3 + "5";
y = "5" + 2 + 3;
console.log(x + " " + y);


let $ = 2;
console.log($);

class User {
    constructor(name, age) {
      this.name = name;   // Public property
      this._age = age;    // Conventionally private
    }
  
    getAge() {
      return this._age;  // Accessing the "private" variable inside the class
    }
  }
  
  const user1 = new User("Gauri", 22);
  console.log(user1.name); 
  console.log(user1._age); // ⚠️ 22 (but should be treated as private)
  

  function example() {
    //let m = 5;
    //var m = 5;
    this.n = 10; // Only `y` binds to global
  }
  
  example();
  console.log(n); // ✅ 10
  //console.log(m); // ❌ ReferenceError: x is not defined
  

//   Strict mode does not affect this inside methods of an object.
// this inside an object method still refers to the calling object (obj).

"use strict";
const obj = {
  name: "Gauri",
  show: function () {
    console.log(this.name); // ✅ 'this' still refers to obj
  }
};
obj.show(); // ✅ Gauri


// You can change the elements of a constant array:
// But you can NOT reassign the array:
const cars = ["BMW", "Audi", "Ferrari", "Mercedes"];
cars[0] = "Fortuner";
cars.push("Porsche");
console.log(cars);



let p = 4;
console.log(p++);
console.log(p);

let g = 3;
let h = 2;
console.log(g**h);
console.log(Math.pow(g, h));


