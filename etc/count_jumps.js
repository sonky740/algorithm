// 숲속에 토끼가 살고 있습니다. 겁이 많은 토끼는 맹수의 습격을 피하기 위해 안전한 토끼굴로 도망치려고 합니다. 토끼와 토끼굴은 다음 그림과 같이 수직선 위에 표현할 수 있는데, 토끼는 항상 0의 위치에 있으며, 토끼굴은 n 만큼 떨어진 위치에 있습니다. 토기는 수직선 위에서 움직이며, 항상 자연수 거리만큼 점프합니다. 또, 처음 점프한 방향으로만 계속해서 점프할 수 있습니다(즉, 방향을 바꿀 수 없습니다.). 토끼는 처음 점프할 때는 어떤 거리든지 점프할 수 있는데, 첫 점프 이후에는 힘이 조금씩 빠지기 때문에 항상 이전에 점프 한 거리보다 짧게 점프합니다. 이때 토끼가 토끼굴에 k 번 점프해서 도착하는 방법의 가짓수를 구하려 합니다. 예를 들어 토끼는 0의 위치에 있으며 토끼굴은 9만큼 떨어진 위치에 있을 때, k = 3이라면, 토끼가 3번 점프해서 토끼굴에 도착하는 방법은 다음과 같이 3가지가 있습니다.
// 처음에 6만큼 점프 후 다음에 2만큼 점프하고 마지막에 1만큼 점프합니다.
// 처음에 5만큼 점프 후 다음에 3만큼 점프하고 마지막에 1만큼 점프합니다.
// 처음에 4만큼 점프 후 다음에 3만큼 점프하고 마지막에 2만큼 점프합니다.
// 토끼굴의 위치 n과 토끼의 점프 횟수 k가 매개변수로 주어질 때, 토끼가 k 번 점프해서 토끼굴에 도착하는 방법의 가짓수를 return 하도록 solution 함수를 완성해주세요. 단, 답이 커질 수 있으므로 정답을 1,000,000,007로 나눈 나머지를 return해주세요.
// 제한 사항
// n은 토끼굴의 위치를 나타내며, 1 이상 300 이하의 자연수입니다.
// k는 토끼가 점프하는 횟수를 나타내며, 1 이상 24 이하의 자연수입니다.
// 정답을 1,000,000,007로 나눈 나머지를 return 해주세요.
let memo;

function countJumps(n, k, maxJump) {
  if (n === 0 && k === 0) return 1;
  if (n < 0 || k === 0) return 0;
  if (memo[n][k][maxJump] !== undefined) return memo[n][k][maxJump];

  let count = 0;
  for (let i = 1; i <= maxJump; i++) {
    count += countJumps(n - i, k - 1, i - 1);
  }
  memo[n][k][maxJump] = count;

  return count;
}

function solution(n, k) {
  memo = Array.from({ length: n + 1 }, () =>
    Array.from({ length: k + 1 }, () => Array(k + 1).fill(undefined))
  );

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += countJumps(n - i, k - 1, i - 1);
  }
  return answer % 1_000_000_007;
}

console.log(solution(9, 3)); // 3
console.log(solution(10, 2)); // 4
console.log(solution(9, 4)); // 0
