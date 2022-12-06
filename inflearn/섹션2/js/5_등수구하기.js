// 등수 구하기
// N(1<=N<=100)명의  학생의  국어점수가  입력되면  각  학생의  등수를  입력된 순서대로 출력하는 프로그램을 작성하세요.
// 첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를  의미하는 N개의 정수가 입력된다.  같은  점수가  입력될  경우  높은  등수로  동일 처리한다.즉, 가장  높은  점수가  92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
function solution(arr) {
  let answer = [];
  const sortArr = arr.slice().sort((a, b) => b - a);
  const rankObj = {};

  // 오브젝트로 등수 구하기
  for (let i = 0; i < sortArr.length; i++) {
    if (!rankObj[sortArr[i]]) {
      rankObj[sortArr[i]] = i + 1;
    }
  }

  // 점수에 맞게 등수 매칭
  for (let i = 0; i < arr.length; i++) {
    answer.push(rankObj[arr[i]]);
  }

  return answer;
}
const arr = [87, 89, 92, 100, 76];
// const arr = [87, 89, 100, 100, 76];
console.log(solution(arr));
