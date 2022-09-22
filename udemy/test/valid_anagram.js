// 애너그램인지?
function solution(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

solution('', ''); // true
solution('aaz', 'zza'); // false
solution('anagram', 'nagaram'); // true
solution('rat', 'car'); // false) // false
solution('awesome', 'awesom'); // false
solution('amanaplanacanalpanama', 'acanalmanplanpamana'); // false
solution('qwerty', 'qeywrt'); // true
solution('texttwisttime', 'timetwisttext'); // true
