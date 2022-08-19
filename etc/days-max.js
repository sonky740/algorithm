// 연속된 k일 중에 배열의 최대값
function solution(estimates, k) {
  let answer = 0;
  let arr = [];

  for (let i = 0; i <= estimates.length - k; i++) {
    const group = estimates.slice(i, i + k);
    const groupMax = group.reduce((a, b) => a + b);
    arr.push(groupMax);
  }

  answer = Math.max(...arr);

  return answer;
}

console.log(solution([10, 1, 10, 1, 1, 4, 3, 10], 6));