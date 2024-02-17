// N명의 학생이 시험을 보았습니다. 각 학생에는 1부터 N까지의 번호가 붙어있습니다. N명의 학생의 시험 점수를 바탕으로 등수를 부여하려고 합니다. 각 학생의 등수는 자신보다 높은 점수를 받은 학생의 수에 1을 더한 수 입니다. 예를 들어, 세 학생이 있고 1, 2, 3번 학생의 성적이 각각 2, 2, 1이라면 1, 2번 학생은 가장 점수가 높고 동점이기 때문에 1등이고, 3번 학생은 1, 2번 학생보다 점수가 낮기 때문에 3등입니다. 1번부터 N번 학생까지의 점수가 순서대로 들어있는 배열 grade가 주어질 때 1번부터 N번 학생까지의 등수가 순서대로 들어있는 배열을 return 하도록 solution 함수를 완성해주세요.
// - grade의 길이는 1이상 1,000,000 이하입니다.
// - grade의 각 원소는 1이상 1,000,000,000 이하입니다.

function solution(grade) {
  const students = grade.map((score, index) => ({ score, index }));
  students.sort((a, b) => b.score - a.score);

  const answer = new Array(grade.length);
  let rank = 1;

  for (let i = 0; i < students.length; i++) {
    if (i > 0 && students[i].score !== students[i - 1].score) {
      rank = i + 1;
    }
    answer[students[i].index] = rank;
  }

  return answer;
}

console.log(solution([2, 2, 1])); // [1, 1, 3]
console.log(solution([1, 2, 4, 2])); // [4, 2, 1, 2]
