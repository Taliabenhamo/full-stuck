let List=[];

function addItem(){
let newItem = document.querySelector("#item");
let val = newItem.value;
  console.log(val);
  List.push(val);
  newItem.value = "";

}




function makeList(){

    let Elem = document.querySelectorAll(".disp");
    Elem[0].innerHTML = "<ul>";
  
    for (let product of List) {
      Elem[0].innerHTML +=
     '<li id="' + product + '" onClick = "mark(' + product + ')">' + product + "</li>";      
        
      
       
    }
    Elem[0].innerHTML += "</ul>";
  }







function mark(list) {
  
  list.style.textDecoration = "line-through";
}
