export let changeColor = () => {
  let r = document.getElementById("input-1").value;
  let g = document.getElementById("input-2").value;
  let b = document.getElementById("input-3").value;

  return `rgb(${r},${g},${b})`;
};

export let contries = ["isreal", "germany", "poland", "lebanon", "france"];

