// 대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요.
function solution(s) {
  let answer = s.toUpperCase();
  return answer;
}
const str = 'ItisTimeToStudy';
console.log(solution(str));
