function mergeSort(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

mergeSort([1, 10, 50], [2, 14, 99, 100]);

function mergeSortRecursion(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSortRecursion(arr.slice(0, mid));
  let right = mergeSortRecursion(arr.slice(mid));
  return mergeSort(left, right);
}

mergeSortRecursion([10, 24, 76, 73, 72, 1, 9]);
