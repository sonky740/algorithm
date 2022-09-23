// 첫번째 단어가 2번째 단어에 속하는지. 단, 순서가 알맞아야함.
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function solution(str1, str2) {
  let index = 0;
  let index2 = 0;
  if (!str1) return true;
  while (index2 < str2.length) {
    if (str2[index2] === str1[index]) index++;
    if (index === str1.length) return true;
    index2++;
  }
  return false;
}

// Time: O(N + M)
// Space: O(1)
solution('hello', 'hello world'); // true
solution('sing', 'sting'); // true
solution('abc', 'abracadabra'); // true
solution('abc', 'acb'); // false (order matters)
