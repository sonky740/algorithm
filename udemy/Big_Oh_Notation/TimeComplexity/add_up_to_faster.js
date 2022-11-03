// 시간 복잡도
// O(1) - Constant Time
// 입력값이 증가하더라도 연산 횟수는 일정하다.
function addUpTo(n) {
  return n * (n + 1) / 2;
}

const time1 = performance.now();
addUpTo(1000000000);
const time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)