function solution(arr) {
  let answer = 0;
  let max = 0;
  let temp = 0;
  const tempArray = [];

  for (let x of arr) {
    temp = String(x)
      .split('')
      .reduce((acc, cur) => (acc += Number(cur)), 0);
    tempArray.push(temp);
  }
  max = Math.max(...tempArray);

  for (let i = 0; i < arr.length; i++) {
    if (tempArray[i] === max) {
      tempArray.push(arr[i]);
    }
  }
  answer = Math.max(...tempArray);
  return answer;
}

const arr = [128, 460, 603, 40, 521, 137, 127];
console.log(solution(arr));
