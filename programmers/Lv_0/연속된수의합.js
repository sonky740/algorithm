// 연속된 수의 합 lv.0
// https://school.programmers.co.kr/learn/courses/30/lessons/120923
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
function solution(num, total) {
  const answer = [];
  for (let i = 0; i < num; i++) {
    answer.push(i);
  }
  const sum = answer.reduce((a, b) => a + b);
  return answer.map((n) => n - (sum - total) / num);
}

solution(3, 12); // [3, 4, 5]
solution(2, 11); // [4, 7]
solution(5, 5); // [-1, 0, 1, 2, 3]
