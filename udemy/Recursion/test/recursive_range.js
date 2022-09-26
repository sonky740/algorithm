function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

recursiveRange(6); // 21
recursiveRange(10); // 55
