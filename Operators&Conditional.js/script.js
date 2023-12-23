console.log("Hello world")
// this is single line comment
/*  this is used for multiple line 
    comment 
 */

// Operators in Js
/**
 * Arithmetic Operators +,-,*,/
 */
let a=5;
let b=2
// console.log("a+b=", a+b)
// console.log("a-b=", a-b)
// console.log("a*b=", a*b)
// console.log("a/b=", a/b)
// console.log("a%b=", a%b)
// console.log("a**2",a**2)
// console.log("a++",a)
// console.log("a--",a--)

// Assignment Operator =, +=, -=, *=, %=, **=

// a += 4;
// console.log(a)

// b **= 2;
// console.log(b)



// Comparison Operator ==, !=, ===, !==
// let x=4
// let y="4"
// console.log("a==b", a==b)
// console.log("a!=b",a!=b)
// console.log("a===b",a===b)
// console.log("x==y",x==y)
// console.log("x===y",x===y)
// console.log("x!==y",x!==y)


// Logical Operator && || ! 
// let x=1;
// let y =5;

// let cond1 =x>y;
// let cond2 =x<y;
// console.log(cond1&&cond2)
// console.log(cond1||cond2)
// console.log(!cond1) // cond1 is false but output is true
// console.log(!cond2) // cond2 is true but output is false

// condition statements 

// if statement 
// let age =24;
// if(age>18){
//     console.log("You can vote")
// }

//if-else statement 
// let age =24;
// if(age>18){
//     console.log("You can vote")
// }else{
//     console.log("you cann't vote")
// }

// if , else if , else statement 

// let age =20;
// if(age<18){
//     console.log("Junior")
// }else if(age>60){
//     console.log("Senior")
// }else{
//     console.log("Middle")
// }


// Ternary Operators 

// let age = 19
// let result =age >18 ? "adult": "not adult";
// console.log(result)

// Switch case 
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// it take value from promt keyword
let num1 =prompt("Enter a Number") ;
if(num1%5==0){
    alert("Number is multiple of 5",num1)
}else{
    alert("Number is not a multiple of 5",num1)
}



