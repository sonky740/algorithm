// 숫자 변환하기 lv.2
// https://school.programmers.co.kr/learn/courses/30/lessons/154538
// 자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.
// x에 n을 더합니다
// x에 2를 곱합니다.
// x에 3을 곱합니다.
// 자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.
// 1 ≤ x ≤ y ≤ 1,000,000
// 1 ≤ n < y
function solution(x, y, n) {
  if (x === y) return 0;
  if (x + n > y && y % x !== 0) return -1;

  const queue = [[x, 0]];
  const visited = new Set([x]);
  let i = 0;

  while (queue.length > 0) {
    if (queue.length === i) return -1;

    const [num, count] = queue[i];
    i++;

    if (num === y) return count;

    if (num + n <= y && !visited.has(num + n)) {
      queue.push([num + n, count + 1]);
      visited.add(num + n);
    }

    if (num * 2 <= y && !visited.has(num * 2)) {
      queue.push([num * 2, count + 1]);
      visited.add(num * 2);
    }

    if (num * 3 <= y && !visited.has(num * 3)) {
      queue.push([num * 3, count + 1]);
      visited.add(num * 3);
    }
  }

  return -1;
}

console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // -1
console.log(solution(2, 9, 4)); // -1
console.log(solution(4, 5, 2)); // -1
