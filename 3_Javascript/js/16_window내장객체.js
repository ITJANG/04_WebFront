// window.setTimeout()
document.getElementById("btn1").addEventListener("click", () => {
  setTimeout(function(){
    alert("3초 후 출력");
  }, 3000);
});

// window.setInterval()
let interval; // setInterval을 저장하기 위한 전역 변수

// 현재 시간 문자열 반환 함수
function currentTime() {

  const now = new Date();

  // console.log(now)
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  // 1의 자리만 나올때 1, 2 만 나옴
  // 01, 02 표현 필요
  
  if(hour < 10) hour = "0" + hour;
  if(min < 10) min = "0" + min;
  if(sec < 10) sec = "0" + sec;

  return hour + " : " + min + " : " + sec;
}

function clockFn() {

  const clock = document.getElementById("clock");

  clock.innerText = currentTime();

  interval = setInterval(()=>{
    clock.innerText = currentTime();
  }, 1000);
}

clockFn();

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
});