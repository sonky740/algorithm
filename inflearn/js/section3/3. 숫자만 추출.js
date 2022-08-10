/**
 *
 * @param {string} str
 */
function solution(str) {
  const answer = str.replace(/[^0-9]/g, '');
  return parseInt(answer);
}

const str = 'g0en2T0s8eSoft';
console.log(solution(str));
