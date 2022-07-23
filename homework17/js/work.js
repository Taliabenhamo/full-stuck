let elem = document.getElementById("root");

let charectres = [];

Herro1 = {
  name: "katty",
  superPower: "fly",
  favoriteColor: "orange",
  
};
Herro2 = {
  name: "maxy",
  superPower: "know the future",
  favoriteColor: "pink",
}

Herro3 = {
  name: "yobany",
  superPower: "make JS easly",
  favoriteColor: "green",
};
charectres.push(Herro1);
charectres.push(Herro2);
charectres.push(Herro3);

function showUp() {
  elem.innerHTML= "" ;
  for (let hero of charectres) {
    elem.innerHTML += `
    <div> meet ${hero.name}  ! </div>
    <div> she's a herro  with  power of ${hero.superPower}</div>
    <div> and she's favorite color  is ${hero.favoriteColor}</div>`;
  }
}
