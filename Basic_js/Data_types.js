let num = 7;   //number

// Data Type - primitive and object



let num2 = 1000000000000;
console.log(num2);
let num3 = 100_00_00_00_00_00;
console.log(num3);
let num4 = 1e12;
console.log(num4);
let num5 = 4/0;
let num6 = -2/0;
console.log(num5, num6);
console.log(typeof num5, typeof num6);
console.log(Number.MAX_VALUE, Number.MAX_VALUE*10);
console.log(Number.MIN_VALUE, Number.MIN_VALUE/10);

let num7 = 12828222222222222229999999992020284746;
console.log(num7);
let num8 = 12828222222222222229999999992020284746n;
console.log(num8);
//we cant add bigint to normal integer
console.log(num8 + 3n);


let name1 = "Gauri";   //string
let name2 = "Takarkhede";
console.log(name1+" "+name2);

console.log(typeof name1);

let user = "I am \"GAURI\"";
console.log(user);
let user2 = "Gauri \n \t Takarkhede he\blloo";
console.log(user2);

let bool = 5<6;
console.log(bool, typeof bool);

let n = null;
console.log(n, typeof n);
let u ;
console.log( u, typeof u);
let k = 5 / "Gauri";
console.log(k, typeof k);
console.log("Gauri"*5);
