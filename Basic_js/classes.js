class Car1 {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        console.log(date.getFullYear())
        return date.getFullYear()-this.year;
    }
}


const myCar1 = new Car1("Ford", 2014);
const myCar2 = new Car1("Audi", 2019);

console.log(myCar1)
console.log(myCar1.age())

// Inheritence

class Car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return 'I have a '+ this.carname;
    }
}

class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + ', its a '+ this.model;
    }
    get cnam(){
        return this.carname;
    }
    set cnam(x){
       this.carname = x;
    }
    static hello(){
        console.log("Hello")
    }
}

let myCar = new Model("Mercedes", "Maybach");
console.log(myCar)
console.log(myCar.cnam);
myCar.cnam = "X"
console.log(myCar.cnam);
Model.hello();

// class declarations are not hoisted