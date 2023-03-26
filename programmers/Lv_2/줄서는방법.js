// 줄 서는 방법 lv.2
// https://school.programmers.co.kr/learn/courses/30/lessons/12936
// n명의 사람이 일렬로 줄을 서고 있습니다. n명의 사람들에게는 각각 1번부터 n번까지 번호가 매겨져 있습니다. n명이 사람을 줄을 서는 방법은 여러가지 방법이 있습니다. 예를 들어서 3명의 사람이 있다면 다음과 같이 6개의 방법이 있습니다. 
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]
// 사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return하는 solution 함수를 완성해주세요.
// n은 20이하의 자연수 입니다.
// k는 n! 이하의 자연수 입니다.
// 입출력 예
function solution(n, k) {
  const answer = [];
  const factorial = [1];
  let temp = 1;

  for (let i = 1; i <= n; i++) {
    temp *= i;
    factorial.push(temp);
  }

  let arr = Array.from({ length: n }, (v, i) => i + 1);

  while (arr.length > 0) {
    const idx = Math.floor((k - 1) / factorial[arr.length - 1]);
    answer.push(arr.splice(idx, 1)[0]);
    k -= idx * factorial[arr.length];
  }

  return answer;
}

solution(3, 5); // [3,1,2]