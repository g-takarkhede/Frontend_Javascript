// Declaration hoisted to the top but not initialization. (Temporal dead zone)

console.log(a);
greet();

function greet(){
    console.log("Good Morning");
}

// const greet = ()=>{
//     console.log("Good Morning");
// }
//function expressions and class expressions are not hoisted.


var a = 3;

// for let and const, it works differently