// sumZero 문제배열에서 첫번째로 합이 0이 되는 쌍을 찾는 함수.
function solution() {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

solution([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
solution([-2, 0, 1, 3]); // undefined
solution([1, 2, 3]); // undefined

// Time Complexity - O(N)
// Space Complexity - O(1)
