// 두 배열의 길이가 같고, 첫번 째 배열의 요소들의 제곱이 두번 째 배열의 요소들과 같아야합니다. 순서는 상관 없습니다.
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

solution([1, 2, 3], [4, 1, 9]); // true
solution([1, 2, 3], [1, 9]); // false
solution([1, 2, 1], [4, 4, 1]); // false
