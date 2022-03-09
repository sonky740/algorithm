/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function solution(arr) {
  let answer = arr;
  const sum = answer.reduce((a, b) => a + b);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
