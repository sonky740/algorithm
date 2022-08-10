function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let i of arr) {
    let result = parseInt(String(i).split('').reverse().join(''));
    if (isPrime(result) === true) {
      answer.push(result);
    }
  }
  return answer;
}

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
