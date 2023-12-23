/** Event
 * The change in the state of an object is known as an Event
 * Event are fired to notify code of "interesting changes" that may affect code execution.
 * Eg: 
 * Mouse event (click , double click etc) 
 * Keyboard event ( keypress , keyUp, keyDown)
 *  
 * node.event=()=>{
 *  //handle here
 * }
 * 
 */

let btn1= document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a =25;
//     a++;
//     console.log(a)
// }

// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clickX,evt.clickY);

// };

// let div =document.querySelector("div")
// div.onmouseover=()=>{
//     console.log("you are inside div");
// }

// Event Object
// It is special object that details about the event

// Event Listner 
// node.addEventListner(event,callback)
// node.removeEventListner(event,callback)
// Note:  callback reference should be same to remove

btn1.addEventListener("click",() =>{
    console.log("button1 was clicked -- handler1")
})
btn1.addEventListener("click",() =>{
    console.log("button1 was clicked -- handler2")
})
const handler3=() =>{
    console.log("button1 was clicked -- handler3")
}
btn1.addEventListener("click",handler3)

btn1.addEventListener("click",() =>{
    console.log("button1 was clicked -- handler4")
})


btn1.removeEventListener("click",handler3);


