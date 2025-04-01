
document.addEventListener("keydown", function(e){
  const bomberman = document.querySelector("#bomberman");
  // ArrowRight
  // ArrowUp
  // ArrowLeft
  // ArrowDown

  switch(e.key){
    case "ArrowRight": 
    bomberman.style.transform = 'translateX(10px)'; 
    break;
    case "ArrowLeft": 
    bomberman.style.transform = 'translateX(-10px)'; 
    break;
    case "ArrowUp": 
    bomberman.style.transform = 'translateY(10px)'; 
    break;
    case "ArrowDown": 
    bomberman.style.transform = 'translateY(-10px)'; 
    break;
  }
});