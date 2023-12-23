// string are immutable 
let str="This is the way we declare string"

console.log(str)
console.log("Length of String : ",str.length)
console.log("First position of string charachter: ",str[0])


// template Literals  give more feature like we can add expression directly 
// string interpolation is done by subsitution of placeholder

let sentence =`This is a template literal ${1+2+3}`
console.log(sentence)


let obj={
    item:"pen",
    price:10
};
// normal way
console.log("The cost of", obj.item,"is ",obj.price,"rupees");
// using literal `` way 
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output)


//escape charachter
console.log("Gaurav \n Kumar")
let s = "\tGaurav\tKumar" // \t count 1 len
console.log(s)
console.log(s.length)

console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.trim())
let s2 ="sgtu"
console.log(s.slice(0,3)); // ending value non exclusive
console.log(s.concat(s2))
console.log(s2.concat(s))
console.log(s2.replace("s","g"))
console.log(s2.charAt(3))
console.log(s2)
s2[0]="g";
console.log(s2) // string will not change if we want to replace
// doing this 
s2=s2.replace("s","g");
console.log(s2)

