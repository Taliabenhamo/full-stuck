
"use strict;"
//all my import from helpers.js page//

import {changeColor,contries} from "./helpers.js";

// my H1//
let myheader = document.createElement("h1");
myheader.textContent = "I Love  ";
document.body.appendChild(myheader);

//Main Div//
let elem = document.createElement("div");
document.body.appendChild(elem);

// a form//
elem.innerHTML += `<form id=my-form  method="get">
<input id="input-1" type="number" placeholder="give value to">
<input id="input-2" type="number"  placeholder="give value to">
<input id="input-3" type="number"  placeholder="give value to"> 
 </form>` ;


//Main button//
let myBtn = document.createElement("button");
myBtn.textContent = "click here";
document.body.appendChild(myBtn);
myBtn.addEventListener("click", () => {
    myheader.style.backgroundColor = changeColor();
});

let mySelect = document.createElement("select");
document.body.appendChild(mySelect);

let myForm = document.getElementById("my-form")
myForm.appendChild(mySelect)
for (let i = 0; i < contries.length; i++) {
    mySelect.innerHTML += `<option value = "${contries[i]}">${contries[i]}</option>`
}



myheader.innerHTML += `<span> </span>  ` 
let country=document.querySelector("span");




  mySelect.addEventListener("change",() => {
    country.textContent=mySelect.options[mySelect.selectedIndex].text});




