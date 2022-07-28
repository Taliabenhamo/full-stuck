"use strict " ;

let myArr=[];
let maxYear=2020;
let elem = document.querySelector('#disp');

let myCars = [ 
   car1={
    name:"fiat",
    color: "white",
    year: "2012",
},

car2={
    name: "seat",
    color: "black",
    year: "2015",
},
car3={
    name: "mercedes",
    color: "gray",
    year: "2019",
},
car4={
    name: "cupra",
    color: "yellow",
    year: "2022",
},

car5={
    name: "cadilac",
    color: "baz",
    year: "2020",
},
 car6={
    name: "mazda",
    color: "white",
    year: "2010",
},
 car7={
    name: "kia",
    color: "white",
    year: "2017",
},
 car8={
    name: "Bmw",
    color: "pink",
    year: "2021",
},
];
   


myArr.push(myCars);



function value() {
    let newItem= document.querySelector("#items").value;
    let val = newItem.value;
   myArr.push(val);
    val.innerHTML;

};

let displayCars = ()=>{
const carTypes = myCars.filter((myCars) =>myCars.year<=maxYear)

 elem.innerHTML += `
 <div> 
 <h3> car name : ${name.myCars} </h3>
 <div> car color is : ${color.myCars}</div>
 <div> car year is : ${year.myCars}</div>



 </div>`;
}




