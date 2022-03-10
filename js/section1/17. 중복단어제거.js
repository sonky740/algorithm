function solution(s) {
  let answer = [];
  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i;
  });
  return answer;
}
const str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
