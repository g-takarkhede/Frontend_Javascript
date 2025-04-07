// Memoization is an optimization technique that can be used to reduce 
// time-consuming calculations by saving previous input to something called cache 
// and returning the result from it

let sum2 =0;
const calc=(n)=>{
    for(let i=0; i<=n; i++){
        sum2+=i;
    }
    return sum2;
}

const memoize = (func) =>{
    let cache = {};
    return function(...args){
        let n = args[0];
        if(n in cache){
            console.log("cache");
            return cache[n];
        }
        else{
            console.log("calculating first time");
            let result = func(n);
            cache[n] = result;
            return result;
        }
    }
}

console.time();
const eff = memoize(calc);
console.log(eff(5));
console.timeEnd();

console.time();
console.log(eff(5));
console.timeEnd();