// 숫자 카드 나누기 lv.2
// https://school.programmers.co.kr/learn/courses/30/lessons/135807
// 철수와 영희는 선생님으로부터 숫자가 하나씩 적힌 카드들을 절반씩 나눠서 가진 후, 다음 두 조건 중 하나를 만족하는 가장 큰 양의 정수 a의 값을 구하려고 합니다.
// 철수가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고 영희가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
// 영희가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고, 철수가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
// 예를 들어, 카드들에 10, 5, 20, 17이 적혀 있는 경우에 대해 생각해 봅시다. 만약, 철수가 [10, 17]이 적힌 카드를 갖고, 영희가 [5, 20]이 적힌 카드를 갖는다면 두 조건 중 하나를 만족하는 양의 정수 a는 존재하지 않습니다. 하지만, 철수가 [10, 20]이 적힌 카드를 갖고, 영희가 [5, 17]이 적힌 카드를 갖는다면, 철수가 가진 카드들의 숫자는 모두 10으로 나눌 수 있고, 영희가 가진 카드들의 숫자는 모두 10으로 나눌 수 없습니다. 따라서 철수와 영희는 각각 [10, 20]이 적힌 카드, [5, 17]이 적힌 카드로 나눠 가졌다면 조건에 해당하는 양의 정수 a는 10이 됩니다. 철수가 가진 카드에 적힌 숫자들을 나타내는 정수 배열 arrayA와 영희가 가진 카드에 적힌 숫자들을 나타내는 정수 배열 arrayB가 주어졌을 때, 주어진 조건을 만족하는 가장 큰 양의 정수 a를 return하도록 solution 함수를 완성해 주세요. 만약, 조건을 만족하는 a가 없다면, 0을 return 해 주세요.
// 1 ≤ arrayA의 길이 = arrayB의 길이 ≤ 500,000
// 1 ≤ arrayA의 원소, arrayB의 원소 ≤ 100,000,000
// arrayA와 arrayB에는 중복된 원소가 있을 수 있습니다.
function solution(arrA, arrB) {
  let answer = 0;
  const maxNumA = arrA[arrA.length - 1]; // Math.max는 아주 큰 배열에서 메모리 초과가 나서 런타임 에러 발생
  const maxNumB = arrB[arrB.length - 1];
  const divisorA = [];
  const divisorB = [];
  const answerArr = [];

  for (let i = 2; i <= maxNumA; i++) {
    if (arrA.every((num) => num % i === 0)) divisorA.push(i);
  }

  for (let i = 2; i <= maxNumB; i++) {
    if (arrB.every((num) => num % i === 0)) divisorB.push(i);
  }

  // arrA의 모든 수가 나누어지는 divisorB의 수
  if (divisorB.length !== 0) {
    for (let i = 0; i < divisorB.length; i++) {
      if (arrA.every((num) => num % divisorB[i] !== 0)) {
        answerArr.push(divisorB[i]);
      }
    }
  }

  // arrB의 모든 수가 나누어지는 divisorA의 수
  if (divisorA.length !== 0) {
    for (let i = 0; i < divisorA.length; i++) {
      if (arrB.every((num) => num % divisorA[i] !== 0)) {
        answerArr.push(divisorA[i]);
      }
    }
  }

  if (answerArr.length === 0) return 0;

  answer = Math.max(...answerArr);

  return answer;
}

// function solution(arrayA, arrayB) {
//     const aResult = getAnswer(arrayA, arrayB)
//     const bResult = getAnswer(arrayB, arrayA)

//     return aResult > bResult ? aResult : bResult
// }

// function getAnswer (A, B) {
//     A.sort((a, b) => a - b)
//     for (let i = A[0]; i > 1; i--) {
//         if (A.every(a => a % i === 0) && !B.some(b => b % i === 0)) return i
//     }
//     return 0
// }

solution([10, 17], [5, 20]); // 0
solution([10, 20], [5, 17]); // 10
solution([14, 35, 119], [18, 30, 102]); // 7
solution([1], [1]);
