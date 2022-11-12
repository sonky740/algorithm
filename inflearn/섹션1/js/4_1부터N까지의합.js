// 1부터 n까지의 합
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요. 
function solution(n) {
  const answer = (n * (n + 1)) / 2;
  return answer;
}
console.log(solution(10));