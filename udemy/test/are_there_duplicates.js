// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function solution(...args) {
  const object = {};
  for (const i of args) {
    object[i] ? (object[i] += 1) : (object[i] = 1);
  }

  for (const key in object) {
    if (object[key] > 1) return true;
  }

  return false;
}

// function solution(...args) {
//   return new Set(args).size !== arguments.length;
// }

// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)
solution(1, 2, 3); // false
solution(1, 2, 2); // true
solution('a', 'b', 'c', 'a'); // true
