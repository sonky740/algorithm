// 매달 k 일은 아파트 관리비를 내는 날입니다. 만약 그달의 k 일이 주말 (토요일, 일요일)이라면 관리비는 k 일로부터 가장 가까운 평일에 냅니다.  한 해의 시작일인 1월 1일에 해당하는 요일 day와 매달 관리비를 내야 하는 날짜 k가 매개변수로 주어질 때, 그해의 1월부터 12월까지 매달k일이 평일이면 0을, 주말이면 1을 순서대로 배열에 담아 return 하도록 solution 함수를 완성해주세요.

function solution(day, k) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let answer = [];
  let currentDay = day;

  for (let i = 0; i < 12; i++) {
    let paymentDay = (currentDay + k - 1) % 7;
    answer.push(paymentDay === 5 || paymentDay === 6 ? 1 : 0);
    currentDay = (currentDay + daysInMonth[i]) % 7;
  }

  return answer;
}

console.log(solution(6, 1));
console.log(solution(6, 25));
