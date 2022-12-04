// 단속 카메라 lv.3
// https://school.programmers.co.kr/learn/courses/30/lessons/42884
// 고속도로를 이동하는 모든 차량이 고속도로를 이용하면서 단속용 카메라를 한 번은 만나도록 카메라를 설치하려고 합니다.
// 고속도로를 이동하는 차량의 경로 routes가 매개변수로 주어질 때, 모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 최소 몇 대의 카메라를 설치해야 하는지를 return 하도록 solution 함수를 완성하세요.
// 차량의 대수는 1대 이상 10,000대 이하입니다.
// routes에는 차량의 이동 경로가 포함되어 있으며 routes[i][0]에는 i번째 차량이 고속도로에 진입한 지점, routes[i][1]에는 i번째 차량이 고속도로에서 나간 지점이 적혀 있습니다.
// 차량의 진입/진출 지점에 카메라가 설치되어 있어도 카메라를 만난것으로 간주합니다.
// 차량의 진입 지점, 진출 지점은 -30,000 이상 30,000 이하입니다.
function solution(routes) {
  let answer = 0;
  routes.sort((a, b) => a[1] - b[1]);
  let camera = -30001;

  for (let i = 0; i < routes.length; i++) {
    if (camera < routes[i][0]) {
      camera = routes[i][1];
      answer++;
    }
  }

  return answer;
}
solution([
  [-20, -15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
]); // 2
// solution([[-2,-1], [1,2],[-3,0]]) // 2
// solution([[0,0]]) // 1
// solution([[0,1], [0,1], [1,2]]) // 1
// solution([[0,1], [2,3], [4,5], [6,7]]) // 4
// solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]]) // 2
// solution([[-20,15], [-14,-5], [-18,-13], [-5,-3]]) // 2
// solution([[-20,15], [-20,-15], [-14,-5], [-18,-13], [-5,-3]]) // 2
