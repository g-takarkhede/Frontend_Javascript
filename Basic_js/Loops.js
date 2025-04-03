
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

for(let key in student){
    console.log(key, student[key]);
}

for(let key in student.laptop){
    console.log(key, student.laptop[key]);
}