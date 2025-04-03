const msg = "Hii \nI am Gauri"
console.log(msg);

let n = "Gauri";
const mail =
`
Hello ${n},
  
I hope you are \v doing well.

regards,
xyz`

console.log(mail);

let x = "John";
let z = new String("John");
let y = new String("John");
console.log(x, typeof x);
console.log(y, typeof y);
console.log(x==y);
console.log(x===y);

console.log(y == z);
console.log(y === z);
   
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(text.length);
console.log(text.charAt(2));
console.log(text.charCodeAt(0));
console.log(text.charAt(-2));
console.log(text.charAt(77));
console.log(text.at(-2));
console.log(text.at(77));
console.log(text[-2]);
console.log(text[77]);

let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7, 13);
console.log(part);
console.log(text2.slice(-4, text2.length));
part = text2.substring(7, 13);
console.log(part);
console.log(text2.substr(-4)); // deprecated

let t1 = "Hello World";
let t2 = " !!";
console.log(t1.toLowerCase());
console.log(t1.toUpperCase());
console.log(t1);
console.log(t1.concat(t2));


let t3 = "   Hello     ";
console.log(t3);
console.log(t3.trim());
console.log(t3.trimEnd() , "hii", t3.trimStart());


console.log(t2.padStart(10, "*"));
console.log(t1.repeat(4));

// By default, the replace() method is case sensitive
let t4 = "Please visit MICROSOFT and Microsoft and MICROSOFT visit!";
console.log(t4.replace("Microsoft", "W3Schools"));
console.log(t4.replaceAll("Microsoft", "W3Schools"));
console.log(t4.replace(/Microsoft/ig, "W3Schools"));

console.log(t1.split(" "));

console.log(t4.indexOf("visit"));
console.log(t4.lastIndexOf("visit"));

console.log(t4.indexOf("visit", 12));
console.log(t4.search("visit"));