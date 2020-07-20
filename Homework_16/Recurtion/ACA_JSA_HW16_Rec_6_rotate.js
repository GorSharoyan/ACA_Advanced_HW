function rotate(arr, n) {
  [first, ...rest] = arr;
  rest.push(first);
  if (n === 1) {
    return rest;
  }
  return rotate(rest, n - 1);
}