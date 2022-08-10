/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {number}
 */
function solution(s, t) {
  const answer = s.split(t).length;
  return answer - 1;
}

const str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
