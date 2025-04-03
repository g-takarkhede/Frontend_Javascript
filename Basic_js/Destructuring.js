let a = 2;
let b = 4;
[a, b] = [b, a];
console.log(a + " " + b);


const colors = ["red", "blue", "green", "white", "yellow", "black"];
[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);

// Array destructuring 
const [x, y, c, ...d] = colors;
console.log(x, y, c);
console.log(d);

// Object Destructuring
function displayStudent({name, age, place, id = 1}){
   console.log("data" ,name, age, place, id);
}

const student = {
    name : "Gauri",
    age : 22,
    place : "Pune"
}
const student2 = {
    name : "G",
    age : 23,
    place : "Pune",
    id : 3
}


displayStudent(student);
displayStudent(student2)