// 반복문으로 구현
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// 재귀호출로 구현
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
