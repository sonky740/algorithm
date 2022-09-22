// 고유값 체크
function solution(arr) {
  let answer = 0;
  const set = new Set(arr);
  const newArr = [...set];

  answer = newArr.length;
  return answer;
}
solution([1, 2, 2, 5, 7, 7, 99]);
solution([1, 1, 1, 1, 1, 2]); // 2
solution([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
solution([]); // 0
solution([-2, -1, -1, 0, 1]); // 4
