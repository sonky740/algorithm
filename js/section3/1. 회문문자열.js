/**
 * @param {string} s
 * @returns
 */
function solution(s) {
  let answer = 'YES';
  if (s.toLocaleLowerCase() !== s.toLocaleLowerCase().split('').reverse().join('')) answer = 'NO';
  return answer;
}

const str = 'gooG';
console.log(solution(str));
