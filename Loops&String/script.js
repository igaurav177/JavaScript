// console.log("Gaurav Kumar")
// console.log("Gaurav Kumar")
// console.log("Gaurav Kumar")
// console.log("Gaurav Kumar")
// console.log("Gaurav Kumar")

// Loops 
// for loop 
// for(let i=1;i<=5;i++){
//     console.log("Gaurav Kumar")
// }
// console.log("loops is ended")

// while loop 
/**
 while (condition){
    // do some work
}
 */

// let i=1;
// while(i<=5){
//     console.log("i:",i);
//     i++;
// }

// do while loop 
/**
 do{
    //do some work
 }while(condition);
 */
// let i=20
//  do{
//     console.log(i)
//     i++;
//  }while(i<=10);


// for of loop  it help in looping string and array
// for(let val of strvar){
//     //do some work
// }

// let name = "Gauravkumarsharma"
// let length =0
// for(let i of name){
//   length++;
// }

// console.log("String size ",length)


//for in loop  it is more used for object array 
let student ={
    name:"Rahul kumar",
    age:20,
    cgpa:9,
    ispadd:true

}

for(let key in student){
    console.log("key=",key,"Value=",student[key])
}