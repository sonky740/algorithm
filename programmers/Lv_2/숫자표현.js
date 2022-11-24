// 숫자 표현 lv.2
// https://school.programmers.co.kr/learn/courses/30/lessons/12924
// Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.
// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.
// n은 10,000 이하의 자연수 입니다.
function solution(n) {
  let answer = 0;
  let tempArr = [];
  let i = 1;

  while (i <= n) {
    tempArr.push(i);
    i++;

    const sum =
      (tempArr[tempArr.length - 1] * (tempArr[tempArr.length - 1] + 1)) / 2 -
      (tempArr[0] * (tempArr[0] - 1)) / 2;

    if (sum === n) {
      i = tempArr[0] + 1;
      answer += 1;
      tempArr = [];
    } else if (sum > n) {
      i = tempArr[0] + 1;
      tempArr = [];
    }
  }

  return answer;
}
solution(15); // 4
solution(10); // 2
