function add1(a, b, c){
    return a+b+c;
}

function add2(a){
    return function (b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add1(4, 5, 6));
console.log(add2(4)(5)(6));



function add(a){
     return function(b){
        if(b) return add(a + b);
        return a;
     }
}

console.log(add(2)(4)(7)(5)());


function sum(a){
    return function(b, c){
        return a+b+c;
    }
}

const x = sum(3);
console.log(x(4,5));

console.log(sum(3)(4,5));


function curry(func){  
    return function curriedFunc(...args){
        if(args.length >= func.length){
            return func(...args);
        }
        else{
            return function(...next){
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const sum2 = (a, b, c, d)=> a+b+c+d;

const totalSum = curry(sum2);
console.log(totalSum(1)(2)(4)(5));