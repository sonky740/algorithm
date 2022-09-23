// arr에서 연속된 num만큼 최대 합 (슬라이딩 윈도우)
function solution(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    // 첫번째 수를 빼고 마지막 수 다음 수를 더함.
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

solution([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
