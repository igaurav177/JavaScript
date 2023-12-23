/** Function In JS
 * Block of code that performs a specific task, can be invoked whenever needed
 * two ways  
 * function functionName(){
 * //do some work
 * }
 * functionName(); // function call 
 * //function parameter  are local variable -> block scope
 * function functionName(para1 , para2){
 * //function body do some work
 * }
 * functionName(para1,para2);
 */
console.log("Hello!")
"abc".toUpperCase()
let arr=[1,2,3,4].push(5) // () using this calling of function 


// function myFunction(){
//     console.log("Welcome gaurav kumar")
// }
// myFunction();


function myFunction(msg){ // parameter in function 
    console.log(msg);
}

myFunction("hi gaurav"); // argument passed in function call

function sum( x, y){
    //local variable as x and y
    s=x+y;
    console.log(s);
}
sum(2,3);

/** Arrow Function 
 * const functionName =(para1,para2) => {
 * // do some work
 * }
 * 
 */

const arrowSum=(a,b)=>{
    console.log(a+b);
}
arrowSum(2,3);

const arrowMul = (a,b)=>{
    return a*b;
}
console.log(arrowMul(3,4))

const arrowDiv=(p,q) => {
    return p/q;
}
console.log(arrowDiv(2,2));


//  Higher order function or higher order method
// foEach loop in Array 
// forEach loop is used to calculate or perform operation

let ar=[1,2,3,4,5];
ar.forEach(function printVal(val){
    console.log(val);
});

ar.forEach((val)=>{
    console.log(val);
})

// Array method Map
// map is used to create a new array using  some return valued  based on each value 
// which is stored at the indices of array
let nums = [45,35,32]
nums.map((val)=>{
    console.log(val)
})

let newArr = nums.map((val)=>{
    return val*2
})

console.log(newArr)


// filter method
// fiter some value from array 
let arry=[1,2,3,4,5,6]

let evenArr = arry.filter((val)=>{
    return val%2!==0;
})

console.log(evenArr)

// reduce method 
// perform some operation and reduce the array to a single value.
// it return th single value

let redArr= [1,2,3,4,5,6]
const output = redArr.reduce((res,curr)=>{
    return res+curr;
})
console.log(output)

let largeArr = [5,3,5,6,2,1]
const large = largeArr.reduce((prev,curr)=>{
return prev>curr ? prev:curr;
})

console.log(large)


