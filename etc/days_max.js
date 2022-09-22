// 연속된 k일 중에 배열의 최대값
// 루프문 안에 루프문 O(n^2)가 되버림... 별로 좋지 않은 식
// function solution(estimates, k) {
//   let answer = 0;
//   let arr = [];

//   for (let i = 0; i <= estimates.length - k; i++) {
//     const group = estimates.slice(i, i + k);
//     const groupMax = group.reduce((a, b) => a + b);
//     arr.push(groupMax);
//   }

//   answer = Math.max(...arr);

//   return answer;
// }

// 연속된 k일 중에 배열의 최대값
function solution(estimates, k) {
  let maxSum = 0;
  let tempSum = 0;
  if (estimates.length < k) return null;

  for (let i = 0; i < k; i++) {
    maxSum += estimates[i];
  }
  tempSum = maxSum;
  
  for (let i = k; i < estimates.length; i++) {
    // 첫번째 수를 빼고 마지막 수 다음 수를 더함.
    tempSum = tempSum - estimates[i - k] + estimates[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(solution([10, 1, 10, 1, 1, 4, 3, 10], 6));