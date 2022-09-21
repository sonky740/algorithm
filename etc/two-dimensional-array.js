function solution(matrix, r) {
  if (matrix.length === 0) return [];

  let answer = [];
  for (let i = 0; i < matrix[0].length; i++) {
    answer.push([]);
    for (let j = 0; j < matrix.length; j++) {
      answer[i].push(matrix[j][i]); //matrix의 세로방향 요소들을 result의 가로방향 요소들로 import!
    }
    answer[i].reverse(); //그리고 result의 요소들은 reverse
  } //90도 돌렸을 때 result배열 만들기 완성!

  switch (r % 4) {
    case 0:
      return matrix;
    case 1 || undefined:
      return answer;
    case 2:
      for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
      }
      matrix.reverse();
      return matrix;
    default:
      for (let i = 0; i < answer.length; i++) {
        answer[i].reverse();
      }
      answer.reverse();
      return answer;
  }
}
solution(
  [
    [1, 2],
    [3, 4],
  ],
  3
);
