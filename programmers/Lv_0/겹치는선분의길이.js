// 겹치는 선분의 길이 lv.0
// https://school.programmers.co.kr/learn/courses/30/lessons/120876
// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요. lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.  선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.
// lines의 길이 = 3
// lines의 원소의 길이 = 2
// 모든 선분은 길이가 1 이상입니다.
// lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
// -100 ≤ a < b ≤ 100
function solution(lines) {
  const visited = lines.reduce((a, [x, y]) => {
    for (let i = Math.min(x, y) + 1; i <= Math.max(x, y); i++)
      a[i] = a[i] ? a[i] + 1 : 1;
    return a;
  }, {});

  console.log(Object.values(visited));
  return Object.values(visited).filter((v) => v > 1).length;
}
solution([
  [0, 1],
  [2, 5],
  [3, 9],
]); // 2
solution([
  [-1, 1],
  [1, 3],
  [3, 9],
]); // 0
solution([
  [0, 5],
  [3, 9],
  [1, 10],
]); // 8
