function solution(arr) {
  const answer = [];
  let sum = 0;
  let min = 0;
  const odd = [];
  arr.map(i => {
    if (i % 2 === 1) odd.push(i);
  });
  sum = odd.reduce((a, b) => {
    return a + b;
  });
  min = Math.min(...odd);

  answer.push(sum);
  answer.push(min);
  return answer;
}

const arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
