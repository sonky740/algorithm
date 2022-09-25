// 두 배열 arrA와 arrB가 매개변수로 주어질 때, arrA를 회전해 arrB로 만들 수 있으면 true, 그렇지 않으면 false
function solution(arrA, arrB) {
  let answer = true;
  const copyArrA = [...arrA];
  let testArr = [];

  for (let i = 0; i < arrA.length; i++) {
    copyArrA.unshift(copyArrA[copyArrA.length - 1]);
    copyArrA.pop();

    testArr.push(JSON.stringify(copyArrA) === JSON.stringify(arrB));
  }

  if (!testArr.includes(true)) {
    answer = false;
  }

  return answer;
}

solution([7, 8, 10], [10, 7, 8]);
