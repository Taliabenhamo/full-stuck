import {myFam} from "./informa.js"

let elem=document.getElementById('root');

let ourFam=new Array;

class famous{ 
    constructor(name,cost,img){
    this.name=name,
    this.cost=cost,
    this.img=img;
}
renderFam(){
    let myDiv=document.createElement('div');
    elem.appendChild(myDiv);
    myDiv.addEventListener("click",()=>{
    console.log("meet me");





    })
    myDiv.innerHTML =
    `<h3>${this.name}Estimated value ${this.cost}!</h3>
    <img src="${this.img}" alt="${this.name}">
    `
}

};

for(let x=0;x<myFam.length;x++){
let personF = new famous(
myFam[x].name,
myFam[x].cost,
myFam[x].img,
);
ourFam.push(personF)

};

ourFam.map((all)=>all.renderFam())


