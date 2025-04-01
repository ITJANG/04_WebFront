// name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오
function fn1(name) {
  console.log(`Hello, ${name}!`);
}

fn1("민장");



// 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오
function fn2(num1, num2){
  return num1 + num2;
}

console.log(fn2(3, 5));



// 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 작성
const fn3 = (num1, num2) => {
  return num1 * num2;
}

console.log(fn3(3, 5));



// 두 개의 숫자를 매개변수로 받아, 
// 첫 번째 숫자가 두 번째 숫자보다 크면 "첫 번째 숫자가 더 큽니다"를 출력하고,
// 그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오
const fn4 = (num1, num2) => {
  if(num1 > num2)
    return "첫 번째 숫자가 더 큽니다";
  else
    return "두 번째 숫자가 더 크거나 같습니다"
}

console.log(fn4(3, 5));



// 문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오
const fn5 = (str) => {
  return str.length;
}

console.log(fn5("abcd"));



// 문자열과 반복 횟수를 매개변수로 받아, 해당 문자열을 주어진 횟수만큼 반복하여 출력하는 함수를 선언 및 정의하고 호출하시오
const fn6 = (str, num) => {
  let strs = "";
  for(let i=0; i<num; i++){
    strs += str;
  }
  return strs;
}

console.log(fn6("abcd", 5));



// 숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를 true 또는 false로 반환하는 함수를 선언 및 정의하고 호출하시오
const fn7 = (num) => {
  if(num%2 == 0)
    return true;
  else
    return false;
}

console.log(fn7(6));



// 세 개의 숫자를 매개변수로 받아 그 중 가장 큰 숫자를 반환하는 함수를 선언 및 정의하고 호출하시오
const fn8 = (num1, num2, num3) => {
  if(num1 >= num2 && num1 >= num3)
    return num1;
  else if(num2 >= num3)
    return num2;
  else
    return num3;
}

console.log(fn8(3, 5, 5));



// 배열을 매개변수로 받아 첫 번째 요소를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오
const fn9 = (arr) => {
  return arr[0];
}

console.log(fn9(["apple", "banana", "orange"]));



// 배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오

// 배열.reduce(callback 함수) : JS 배열의 메서드로(함수), 배열의 모든 요소를 순회
// acc(acccumulator) : 이전 콜백 호출에서 반환된 값 (누산기 - 결과를 누적)
// curr(currentValue) : 현재값 - 현재 처리중인 배열 요소 값
const fn10 = (arr) => {

  let sum;
  let avg;

  // for(let i=0; i<arr.length; i++){
  //   sum += arr[i];
  // }
  sum = arr.reduce((acc, curr) => {
    return acc + curr;
  });

  avg = sum/arr.length;

  return {"합계":sum, "평균":avg};
}

console.log(fn10([3, 2, 4]));



// 숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 
// 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오
const fn11 = (num1, num2, func) => {
  return func(num1, num2);
}

function add (num1, num2) {
  return num1+num2;
}

function minus (num1, num2){
  return num1-num2;
}

console.log(fn11(5 , 2, add));



// 사람의 이름과 인사말을 출력하는 함수를 매개변수로 받아, 
// 해당 이름과 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오
const fn12 = (name, func) => {
  return func(name);
}

function hi(name){
  return `Hi, ${name}`;
}

function bye(name){
  return `Bye, ${name}`;
}

console.log(fn12("민장", hi))