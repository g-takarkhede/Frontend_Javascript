//Functions inside the objects = Methods

let laptop ={
    cpu : "I7",
    ram : 16,
    brand : "HP",
    greet : function(){
        console.log("Hello World!!");
    }
}

laptop.greet();

let user1 = {
    firstname : "Gauri",
    lastname : "Takarkhede",
}

let fullname = function(home){
    console.log(this.firstname + " " + this.lastname + " " + home);
}

fullname.call(user1, "Pune");

let user2 = {
    firstname : "Gauri",
    lastname : "xyz",
}

fullname.call(user2, "Mumbai");

fullname("G", "T", "Pune");
fullname(firstname = "G", lastname = "T", home="Pune");

fullname.apply(user1, ["Pune"]);
fullname(firstname = "Gauri", lastname = "T", ["G", "T", "Pune"]);

let fname = fullname.bind(user2, "Pune");
console.log(fname);
fname();

