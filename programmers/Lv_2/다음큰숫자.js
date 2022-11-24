// 다음 큰 숫자 lv.2
// https://school.programmers.co.kr/learn/courses/30/lessons/12911
// 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.
// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다. 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.
// n은 1,000,000 이하의 자연수 입니다.
function solution(n) {
  let answer = 0;
  for (let i = n + 1; i <= 1000000; i++) {
    if (
      i
        .toString(2)
        .split('')
        .filter((v) => v === '1').length ===
      n
        .toString(2)
        .split('')
        .filter((v) => v === '1').length
    ) {
      answer = i;
      break;
    }
  }

  return answer;
}

// 시프트 연산자
// function solution(n) {
//   let i, j;
//   for (i = 0; !(n & 1); i++) {
//     n = n >> 1;
//   } // 1을 찾을때까지 우로 시프트, 시프트 횟수 = i
//   for (j = 0; n & 1; i++, j++) {
//     n = n >> 1;
//   } // 0을 찾을때까지 우로 시프트, 1의 갯수 = j
//   for (j--, n++; i !== j; i--) {
//     n = n << 1;
//   } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 시프트하면서 시프트 횟수 -1
//   for (i; i; i--, n++) {
//     n = n << 1;
//   } // i === 0 될때까지 좌로 시프트 하면서 시프트 횟수 -1, 0자리에 1대입
//   return n;
// }
solution(78); // 83
solution(15); // 23
