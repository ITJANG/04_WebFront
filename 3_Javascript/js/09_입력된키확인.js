// 문자열.toLowerCase()
// 문자열.toUpperCase()

const keys = document.querySelectorAll(".key");
// let idx;
// document.addEventListener("keydown", function(e){
//   switch(e.key.toLowerCase()){
//     case "q": idx = 0; break;
//     case "w": idx = 1; break;
//     case "e": idx = 2; break;
//     case "r": idx = 3; break;
//     default : return;
//   }
//   keys[idx].style.backgroundColor = "pink";

// });

// document.addEventListener("keyup", function(e){
//   switch(e.key.toLowerCase()){
//     case "q": idx = 0; break;
//     case "w": idx = 1; break;
//     case "e": idx = 2; break;
//     case "r": idx = 3; break;
//     default : return;
//   }
//   keys[idx].style.backgroundColor = "white";
// });

// 키보드 이벤트 핸들러 함수
function changeKeyColor(e, color) {
  const keyMap = {'q' : 0, 'w' : 1, 'e' : 2, 'r' : 3};
  const idx = keyMap[e.key.toLowerCase()];
  // keyMap에 없는 값은 underfine로 저장
  
  if(idx != undefined){
    keys[idx].style.backgroundColor = color
  }

}


// 키 눌렸을 때
document.addEventListener("keydown", (e) => changeKeyColor(e, "pink"));
document.addEventListener("keyup", (e) => changeKeyColor(e, "white"));