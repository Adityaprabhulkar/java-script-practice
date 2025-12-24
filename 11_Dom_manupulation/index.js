// document.querySelectorAll(selector);

// let myElement = document.getElementById("myPara");


// =================={inner HTML}===================

// let content = myElement.innerHTML;
// console.log(content);


// let newPara = "hello friends"
// myElement.innerHTML = newPara

// =================={inner text}===================


// let myElement = document.getElementById("myPara")

// let content = myElement.innerHTML;

// console.log(content);

// let newPara = "Hii";

// myElement.innerText = newPara;

// ============================================

// =================={Outer Html}===================

// let myElement = document.getElementById("myPara");

// let content = myElement.outerHTML;

// console.log(content);

// let newPara = '<div>Hiii</div>';

// myElement.outerHTML = newPara

// =================={ Create element }===================

// let newElement = document.createElement("div");
// console.log(newElement);

// let newElement2 = document.createElement("p");
// console.log(newElement2);

// let newElement3 = document.createElement("h1");
// console.log(newElement3);

// newElement.textContent = "Aditya";
// newElement2.textContent = "Raj";
// newElement3.textContent = "RAhul";

// document.body.appendChild(newElement);
// document.body.appendChild(newElement2);
// document.body.appendChild(newElement3);

// let paragraph = document.createElement('p');
// paragraph.textContent = 'Hello is a paragraph';

// document.body.appendChild(paragraph);



var paragraph = document.createElement('p');
var text = document.createTextNode("This is dynamically added paragraph");

paragraph.appendChild(text)

document.body.appendChild(paragraph);






