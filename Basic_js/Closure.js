// A closure is the combination of a function bundled together
//  (enclosed) with references to its surrounding state (the lexical environment).

function main(name){
    const name1 = name;
     function display(){
        console.log(name1);
     }
    //  display();
    return display;
}
let fn = main("Gauri"); 
console.log(main);
fn();



function adder(num){
    function add(b){
        console.log(num + b);
    }
    return add;
}

const addto5 = adder(5);
addto5(2);



function makeCounter(){
    let count = 1;
    function inc(){
        console.log(count++);
    }
    return inc;
}

const counter1 = makeCounter();
counter1();
counter1();
counter1();
counter1();
counter1();

