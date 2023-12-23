const student={
    fullName : "Gaurav Kumar",
    marks: 9.9,
    printMarks: function(){
       console.log("marks = ",this.marks) 
    },
}

// Prototype is special type object inside the object 
student.printMarks()


const employee={
    calTax(){
        console.log("tax rate is 10%")
    },
};
console.log(employee.calTax())

const KaranArjun ={
    salary:5000,
}

KaranArjun.__proto__=employee;
console.log(KaranArjun)
console.log(KaranArjun.calTax())


// through classes 
// class is a program - code template for creating objects. 
// Those objects will have some state(variables) & some behaviour(function ) inside it

/*

*/

// class ToyotaCar{
//     constructor(){
//         console.log("this is toyotacar constructor")
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop")
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
//     getBrand(){
//         return this.brand;
//     }
// }
// console.log(ToyotaCar)
// let fortuner = new ToyotaCar();
// fortuner.start();
// fortuner.stop();
// console.log(typeof fortuner)

// let lexus = new ToyotaCar();
// lexus.setBrand("lexus");
// console.log(lexus.getBrand())

// inheritance 
class Parent{
    hello(){
        console.log("hello");
    }
    
}
class Child extends Parent{

}
let obj  = new Child();
obj.hello();


class Person{
    constructor(){
        console.log("enter parent constructor")
       this.species="homo sapiens";
    }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
    work(){
        console.log("person work ")
    }
}
class Engineer extends Person{
    constructor(branch){
        console.log("enter child Constructor")
        super();
        this.branch=branch;
        console.log("exit child constructor")
    }
    work(){
        console.log("engineer work")
    }
}

let gaurav = new Engineer("CS");

gaurav.eat();
gaurav.work(); // override 
let gk = new Person();
gk.work();

// super keyword 
/// it is used to call parent class access memeber funcation and variable or consturctor

