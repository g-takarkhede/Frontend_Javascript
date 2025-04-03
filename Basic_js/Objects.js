
// Empty Object
//what is not primitive , thats object
let obj = {};

let student = {
    name : "Gauri",
    surname : "Takarkhede",
    age : 22,
    place : "Pune",
    "work place" : "Cloudlex",
    laptop : {
        cpu : "I7",
        ram : 4,
        brand : "hp"
    }
}


console.log(student);
console.log(student.name);
console.log(student["surname"]," ", student["age"]);
console.log(student["work place"]);

let input = "place";
console.log(student[input]);
console.log(student.laptop, student.laptop.brand);

console.log(student.laptop.cpu2?.length);

delete student.age;
console.log(student);