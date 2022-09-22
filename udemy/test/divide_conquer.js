// val이 array에서 몇 번째에 있는지 (분할과 정복)
// time: O(log(n))
function solution(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

solution([1, 2, 3, 4, 5, 6], 4); // 3
solution([1, 2, 3, 4, 5, 6], 6); // 5
solution([1, 2, 3, 4, 5, 6], 11); // -1
