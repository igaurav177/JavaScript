/* variable key points 

variable name is case sensitive
variable name should not allow space in between
only a letter or _ or $ in first character is allowed
Reserved word can't be used as variable name
camel case rule follow  

var,let,const are user before declaring the variable name 


var : variable can be re-declare & updated. A gloabal scope variable.
let : variable can not be re-declare but can be updated. A block scope variable
const: variable cann't be re-declare or updated .A block scope variable. alway must be initialized

= assignment operator

*/




let age=24
console.log(age)
let price=99.55;
console.log(price)
var fullName='Gaurav Kumar'
console.log(fullName)
let x=null
let y=undefined
console.log(x)
console.log(y)
let isFollow=true
console.log(isFollow)


var fullName =23;
console.log(fullName)


const area =34
console.log(area)

{
    let a=5;
 
    console.log(a)
}{
    let a=10;
    console.log(a)
}

/* Data types
7 premitive Datatype in javascript -- Number, Null, String, Symbol, Boolean, BigInt, Undefined

Non premitive datatype -- object (arrays , function)
*/

// Number 
let num =23;
console.log(num)
console.log(typeof num)

// Null 
let p = null 
console.log(null)

//String 
let name  = "Gaurav Kumar"
console.log(name)
console.log(typeof name)

//symbol
let sym =Symbol("hello!")
console.log(sym)
console.log(typeof sym)



//boolean 
let isSubscribe = false;
console.log(isSubscribe)
console.log(typeof isSubscribe)


//undefine
let m 
console.log(m)
console.log(typeof m)

//BigInt 
let bigNumber = BigInt(12232312423243243)
console.log(bigNumber)
console.log(typeof bigNumber)


// Object dataype 
// object is collection of values
// key: value pair is store

const student={
    fullName : "Rahul Kumar",
    age : 20,
    cgpa : 9.9,
    isPass : true
};

console.log(student)
console.log(typeof student)

student["age"]=student["age"]+1;

console.log(student.age)
console.log(student["age"])







