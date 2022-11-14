// 다음에 올 숫자 lv.0
// https://school.programmers.co.kr/learn/courses/30/lessons/120924
// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
function solution(common) {
  let answer = 0;
  let len = common.length;
  let diff = common[1] - common[0];
  let ratio = common[1] / common[0];
  if (diff === common[len - 1] - common[len - 2]) {
    answer = common[len - 1] + diff;
  } else {
    answer = common[len - 1] * ratio;
  }
  return answer;
}
solution([1, 2, 3, 4]); // 5
solution([1, 3, 5, 7]); // 9
solution([2, 4, 8, 16]); // 32
