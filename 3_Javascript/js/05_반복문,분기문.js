
// 메뉴 주문하기
function check1() {

  // 메뉴 가격
  const gimbap = 3000;
  const ramen = 3500;
  const donkkaseu = 5000;

  // 주문 개수 카운트
  let gCount = 0; // 김밥
  let rCount = 0; // 라면
  let dCount = 0; // 돈까스

  // prompt로 입력한 값을 저장할 변수 선언
  let input; // undefined

  // 비교연산자
  // == (값이 동일)
  // === (동일 비교 연산자 : 값, 자료형 동일)
  // !== (값, 자료형 모두 다름)

  // undefined == null (==로 비교시 같은 값이라고 인삭됨)

  while(input !== null) { // 취소 누르기 전까지 반복

    input = prompt("메뉴 번호를 입력하세요!");

    switch(input) {
      case "1": gCount++; break;
      case "2": rCount++; break;
      case "3": dCount++; break;
      case null: alert("주문 완료!"); break;
      default : alert("잘못된 번호 입력");
    }
  }
  
  alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
  let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);

  alert(`총 가격 : ${sum}원`);
}

// Up and Down 게임
function startGame() {

  // 맞춰야하는 난수(1~200) 발생시켜 저장
  const answer = Math.floor(Math.random() * 200 ) + 1;

  // 정답 시도 횟수를 세기 위한 변수 선언
  let count = 0;

  // prompt에 출력할 문자열
  let str = "1부터 200사이 숫자 입력"

  while(true) {
    
    let input = prompt(str);

    if(input===null){
      alert("게임 포기");
      break;
    }

    // 숫자 입력 후 확인 클릭 시
    const value = Number(input); // 입력 받은 값 숫자로

    // 숫자가 아닌 문자열 같이 잘못 입력한 경우
    // NaN (Not a Number : 숫자가 아니다)
    // isNaN(값)  : 값이 NaN이면 true

    if(isNaN(value)) {
      alert("숫자만 입력해 주세요");
      continue;
    }

    if(value < 1 || value > 200) {
      alert("1 ~ 200 사이 값만 작성해 주세요");
      continue;
    }

    // 카운트 1증가
    count++;

    // 정답인 경우
    if(value === answer) {
      alert(`정답!!! ${answer} / 시도 횟수 : ${count}`)
      break;
    }

    // 오답인 경우
    if(value < answer) {
      str = `${value} [UP] / 시도 횟수 : ${count}`;
    } else {
      str = `${value} [DOWN] / 시도 횟수 : ${count}`;
    }
  }
}