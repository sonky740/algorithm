// 문자열 나누기 lv.1
// https://school.programmers.co.kr/learn/courses/30/lessons/140108
// 문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다. 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다. 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다. s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다. 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다. 문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.
// 1 ≤ s의 길이 ≤ 10,000
// s는 영어 소문자로만 이루어져 있습니다.
function solution(s) {
  let answer = 0;

  while (s.length > 0) {
    let x = s[0];
    let count = 0;
    let count2 = 0;
    let str = '';

    for (let j = 0; j < s.length; j++) {
      if (x === s[j]) {
        count++;
      } else {
        count2++;
      }
      str += s[j];
      if (count === count2) {
        s = s.slice(str.length);
        answer++;
        break;
      }
      if (j === s.length - 1) {
        s = s.slice(str.length);
        answer++;
      }
    }
  }

  return answer;
}
solution('banana'); // 3 // ba - ba - ba
solution('abracadabra'); // 6 // ab - ra - ca - da - br - a
solution('aaabbaccccabba'); // 3 // aaabbacc - ccab - ba
