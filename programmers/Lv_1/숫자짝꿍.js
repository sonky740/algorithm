// 숫자 짝꿍 lv.1
// https://school.programmers.co.kr/learn/courses/30/lessons/131128
// 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다. 예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.) 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.
// 3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
// X, Y는 0으로 시작하지 않습니다.
// X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.
function solution(X, Y) {
  let answer = '';
  const xArr = X.split('');
  const yArr = Y.split('');
  const xObj = {};
  const yObj = {};
  const answerArr = [];

  // X, Y의 중복된 숫자를 오브젝트로 저장.
  for (let i = 0; i < xArr.length; i++) {
    if (xObj[xArr[i]]) {
      xObj[xArr[i]]++;
    } else {
      xObj[xArr[i]] = 1;
    }
  }
  for (let i = 0; i < yArr.length; i++) {
    if (yObj[yArr[i]]) {
      yObj[yArr[i]]++;
    } else {
      yObj[yArr[i]] = 1;
    }
  }

  // 저장된 X, Y의 오브젝트를 순회하며 중복된 숫자를 answerArr에 저장.
  for (let i = 0; i < 10; i++) {
    if (xObj[i] && yObj[i]) {
      const count = Math.min(xObj[i], yObj[i]); // 둘 중 적게 저장된걸 answerArr에 저장.
      for (let j = 0; j < count; j++) {
        answerArr.push(i);
      }
    }
  }

  // 0만 저장돼있으면 return '0'
  const zeroCheck = [...new Set(answerArr)];
  if (zeroCheck.length === 1 && zeroCheck[0] === 0) return '0';

  // answerArr를 내림차순으로 정렬.
  answerArr.sort((a, b) => b - a);
  answer = answerArr.join('');

  return answer === '' ? '-1' : answer;
}
solution('100', '2345'); // "-1"
solution('100', '203045'); // "0"
solution('100', '123450'); // "10"
solution('12321', '42531'); // "321"
solution('5525', '1255'); // "552"
