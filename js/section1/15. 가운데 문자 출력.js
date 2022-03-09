/**
 * @param {string} s
 * @returns {string}
 */
function solution(s) {
  let answer;
  const mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  return answer;
}
console.log(solution('study'));
