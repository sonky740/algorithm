// 야근 지수 lv.3
// https://school.programmers.co.kr/learn/courses/30/lessons/12927
// 회사원 Demi는 가끔은 야근을 하는데요, 야근을 하면 야근 피로도가 쌓입니다. 야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값입니다. Demi는 N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때, 퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값을 리턴하는 함수 solution을 완성해주세요.
// works는 길이 1 이상, 20,000 이하인 배열입니다.
// works의 원소는 50000 이하인 자연수입니다.
// n은 1,000,000 이하인 자연수입니다.
function solution(n, works) {
  let answer = 0;
  let max = 0;
  let maxIndex = 0;

  while (n > 0) {
    max = 0;
    maxIndex = 0;

    for (let i = 0; i < works.length; i++) {
      if (max < works[i]) {
        max = works[i];
        maxIndex = i;
      }
    }
    if (max === 0) {
      break;
    }

    works[maxIndex] -= 1;
    n -= 1;
  }
  for (let i = 0; i < works.length; i++) {
    answer += works[i] * works[i];
  }

  return answer;
}
solution(4, [4, 3, 3]); // 12
solution(1, [2, 1, 2]); // 6
solution(3, [1, 1]); // 0
solution(99, [2, 15, 22, 55, 55]); // 580
