function print(content){
    console.log(content);
}

//function acting as an object

let print2 = print;

function greet(){
    console.log(" Good Morning !!");
}

greet();

function greet2(){
    return " Good Morning !!"
}

console.log(greet2());

function greet(){
    console.log(" Good Afternoon !!");
}
greet();

function greet3(time, name){
    return `Good ${time} ` + name;
}
console.log(greet3("Morning", "Gauri"));

let add = function(num1, num2){
    return num1+num2;
}

let sum = add;
print(sum(2, 6));

print(add(4, 6));

print2(add(3, 4));

print(sum);
print(add);


// Arrow functions

let greet4 = (time) => {
 return `Good ${time}`;
}

print(greet4("Night"));

let add2 = (num1, num2) => num1+num2;
print(add2(4, 7));


// Callback functions

hello(goodbye);

function hello(callback){
    console.log("Hello");
    setTimeout(function(){
        callback();
    }, 3000);
    console.log("Gauri");
    
}


function wait(){
    console.log("wait");
}
wait();

function leave(){
    console.log("leave");
}

function goodbye(){
    console.log("Good Bye.");
}

function sum2(x, y, callback){
   let res = x + y;
   callback(res);
}

sum2(4, 5, display);

function display(res){
    console.log(res);
}