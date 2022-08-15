let types = ["spades", "herats", "clubs", "diamond"];
 let counter=0;
let deck=[]
let decFlag=[];
 class cards{
    constructor(number,shape,color){
this.number=number,
this.shape=shape,
this.color=color
    }

 }

 while(deck.length<52){
    counter++;
    let randNum=Math.floor((Math.random()*13)+1);
    let randIndex=Math.floor((Math.random()*4));
    let color=randIndex%2===0 ? "black":"red";
    let flagVal=`${types[randIndex+randNum]}`;
    if(decFlag.includes(flagVal))continue;
   let card=new cards(randNum,types[randIndex],color);
decFlag.push(flagVal);
deck.push(card);

}

console.log(deck);
console.log(decFlag);
console.log(counter);