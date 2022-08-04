
let myBtn = document.getElementById("sent");
let myForm=document.getElementById("my-form");
myForm.addEventListener("submit", () => {
  let userName = document.getElementById("input-1");
  let tmpName = userName.value;
  let jsName = JSON.stringify(tmpName);
  window.localStorage.setItem("Username", jsName);
  userName.value = " ";

  //password///
  let userPassword = document.getElementById("input-2");
  let tmpPassword = userPassword.value;

  let jsPassword = JSON.stringify(tmpPassword);
  window.localStorage.setItem("password", jsPassword);
  userPassword.value = " ";

  //email//

  let userEmail = document.getElementById("input-3");
  let tmpEmail = userEmail.value;

  let jsEmail = JSON.stringify(tmpEmail);
  window.localStorage.setItem("email", jsEmail);
  userEmail.value = " ";

  let newObject = {
    name: tmpName,
    password: tmpPassword,
    email: tmpEmail,
  };

  myArr.push(newObject);

 
});
// import {UserMaker , LocslSavior, getfromStore} from "./veifry"
// const OurUsers = [];
// let myForm=document.getElementById("my-form");
// myForm.addEventListener("submit",(evt)=>{
// evt.preventDefault();
// let userName=document.getElementById("input-1")
// let userPassword=document.getElementById("input-2")
// let userEmail=document.getElementById("input-3")

// UserMaker (userName,userPassword,userEmail,OurUsers)
// LocslSavior[OurUsers , "ourUsers",OurUsers.length]
// userName.value=" ";
// userPassword.value=" ";
//  userEmail.value=" ";

// });
// let myUsers=getfromStore("ourUsers");
// console.log(myUsers);



