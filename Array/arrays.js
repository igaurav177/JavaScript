//collection of item

// this is not good way to store marks 
// let marks ={
//     stu1:94,
//     stu2:91,
//     stu3:90,
// }


let marks =[94,91,90];
console.log(marks[0])
console.log(marks.length) // property 

// print all element 
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }

// using for of loop -- array
// for (let item of marks){
//     console.log(item)
// }


// arrays method 
marks.push(88); //adding at last 
console.log(marks)
marks.pop() // lifo 
console.log(marks)
// let mar = marks.toString();
// console.log(mar)
console.log(marks.toString()) // after apply tostring method in array we can use all the string method init
console.log(marks.toString().length) // , is also counted in length 

let marks2=[56,34,59];
let studentMarks=marks.concat(marks2);
console.log(studentMarks)


// unshift method -- used for adding element in starting
// shift method -- used for deleting element in starting

marks.unshift(99);
console.log(marks)
console.log(marks.shift())
console.log(marks)

// slice() returns a piece of the array -- it does not change in original array

console.log(studentMarks.slice(0,2)); // 2 is not include
console.log(studentMarks.slice(1)); // starting from 1 and end tak


// splice() method change in original array (add, remove ,replace)
// splice(startIdx,delCount, newEle1)
let arr=[1,2,3,4,5,6,7]
//add element 
console.log(arr.splice(2,0,101))
console.log(arr)
//delete element
arr.splice(3,1)
console.log(arr)
//replace
arr.splice(1,1,101)
console.log(arr)


// splice(singlevaluepassed)  -- from that value we delete the element from the array and return that element which is deleted


console.log(arr.splice(4)); // from 4 place it will return whole array
// and new array will update
console.log(arr)



