//Used in arrays and objects
function addNumbers(a, b, c, ...others){
    console.log(others);
    return a+b+c;
}

const x = addNumbers(2, 3, 4, 5, 6, 7);
console.log(x);


var names = ["ajay", "anuj", "vivek", "jay"];

function getNames(name1, name2, name3){
     console.log(name1, name2, name3);
}

getNames(names[0], names[1], names[2]);
getNames(...names);
getNames(names);



//Objects

var student  = {
    name: "Gauri",
    age: "22",
    hobbies: ["Dance", "Drawing"]
}

const ages = student.age;
console.log(ages);


// object destructuring
let {name, hobbies} = student;
console.log(name);
console.log(hobbies);


//rest operator
let {age, ...rest} = student;
console.log(age)
console.log(rest)

//spread operator
var newStudent = {
    ...student,
    age: 23
}
console.log(newStudent);

