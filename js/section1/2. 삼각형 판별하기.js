function solution(a, b, c) {
  let answer = 'YES';
  const max = Math.max(a, b, c);
  a + b + c - max > max ? (answer = 'YES') : (answer = 'NO');
  return answer;
}

console.log(solution(13, 33, 17));
