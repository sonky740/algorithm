// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function solution(num1, num2) {
  if (num1.length !== num2.length) return false;

  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  let countNum1 = {};
  let countNum2 = {};

  for (const n1 of strNum1) {
    countNum1[n1] ? (countNum1[n1] += 1) : (countNum1[n1] = 1);
  }

  for (const n2 of strNum2) {
    countNum2[n2] ? (countNum2[n2] += 1) : (countNum2[n2] = 1);
  }

  if (JSON.stringify(countNum1) === JSON.stringify(countNum2)) {
    return true;
  } else {
    return false;
  }
}

// Time: O(N);
solution(182, 281); // true
solution(34, 14); // false
solution(3589578, 5879385); // true
solution(22, 222); // false
