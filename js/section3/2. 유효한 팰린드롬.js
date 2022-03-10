/**
 *
 * @param {string} s
 * @returns
 */
function solution(s) {
  let answer = 'YES';
  const text = s.toLocaleLowerCase().replace(/[^a-z]/g, '');
  if (text !== text.split('').reverse().join('')) answer = 'NO';
  return answer;
}

const str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
