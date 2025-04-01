const change = document.querySelector("#changeButton");
const box = document.querySelectorAll(".box");
const color = document.querySelectorAll(".color-input");

// change.addEventListener("click", function(){

//   box[0].style.backgroundColor = color[0].value;
//   box[1].style.backgroundColor = color[1].value;
//   box[2].style.backgroundColor = color[2].value;
//   box[3].style.backgroundColor = color[3].value;
//   box[4].style.backgroundColor = color[4].value;
// });


change.addEventListener("click", function(){

  for(let i=0; i < box.length; i++){
    box[i].style.backgroundColor = color[i].value;
  }
});