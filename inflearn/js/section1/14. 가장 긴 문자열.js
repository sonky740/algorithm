function solution(s) {
  let answer = '',
    max = 0;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
const str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
