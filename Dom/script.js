// console.log("Hello!");
/**
 * Window object: 
 * The window object repersents an open window browser.
 * It is browser's object (not javaScript's) & is automatically 
 * created by browser.
 * It is a global object with lots of properties and method
 */

// window.console.log("hello2!")
// window.alert("this is alert")

/** DOM  document object Model  
 * when a web page is loaded, the browser create a Document Object model of the page
 * "window--> document--> html code access"
 * it is tree like structure and every box is node
 * 
 * 
 */
// window.document
// console.dir(window.document)
// console.dir(document)
// console.dir(document.body)
// console.dir(document.head)
// console.dir(document.body.childNodes[0]);
// console.dir(document.body.style.background="green")

// Dom manipulation 

//selecting the element by id
// let heading= document.getElementById("heading");
// console.dir(heading)
// console.log(heading)

// selecting by class name
// let headings= document.getElementsByClassName("headingclass")
// console.dir(headings)
// console.log(headings)

// selecting by tag 
// let parah = document.getElementsByTagName("p")
// console.log(parah)

//  query selector returns the node list
// document.querySelector("myId/myClass/tag") --> returns first element
// document.querySelectorAll("myId/myClass/tag") --> returns a NodeList

// let elements = document.querySelector(".headingclass")
// console.dir(elements)
// let ele  = document.querySelector("#heading")
// console.dir(ele)

// let allEle = document.querySelectorAll(".headingclass")
// console.dir(allEle)


//  Dom manipulation 
// properties  --> get , set(change/update)
/**
 * tagName: return tag for element nodes
 * innerText: return the text content of the element and all its children
 * innerHTML: return the plain text or HTML contents in the element
 * textContent: return the textual content even for hidden elements
 * 
 */

// let firstEle = document.querySelector("#myId");
// console.dir(firstEle);
// console.log(firstEle.tagName)

// let firstEle = document.querySelector("p");
// console.log(firstEle.tagName)

let firstEle = document.querySelector("#myId");


// Attribute getAttribute
// let div =document.querySelector("div")
// console.log(div)
// let id =  div.getAttribute("id");
// console.log(id)
// let name=  div.getAttribute("name");
// console.log(name)

// setAttribute
// let para = document.querySelector("p")
// console.log(para)
// console.log(para.setAttribute("class","newClass"))

// style -> node.style

// let div = document.querySelector("div")
// console.log(div)
// div.style.backgroundColor="purple" 
// div.style.fontSize="34px";
// //hidden
// div.style.visibility="hidden";


// insert element 

let newBtn = document.createElement("button");
newBtn.innerText="Click me";
// console.log(newBtn)
// let div = document.querySelector("div")
// div.append(newBtn) // adding at last 

// div.prepend(newBtn) // adding at starting
// div.before(newBtn)
// div.after(newBtn)


// let newHeading = document.createElement("hi")
// newHeading.innerText="<i>Hi, I am new!</i>";
// document.querySelector("body").prepend(newHeading)


// Delete Element 
// let para = document.querySelector("p");
// para.remove();

// let h  = document.querySelector(".headingclass");
// h.remove()










