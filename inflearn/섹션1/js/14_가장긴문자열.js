// 가장 긴 문자열
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

function solution(arr) {
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > answer.length) {
      answer = arr[i];
    }
  }
  return answer;
}
const str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
