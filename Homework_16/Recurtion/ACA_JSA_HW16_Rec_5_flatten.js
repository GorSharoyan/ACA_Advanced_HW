function flatten(array, result = []) {
  if (array.length === 0) {
    return result;
  }
  const [first, ...rest] = array;
  return Array.isArray(first)
    ? result.concat(flatten(first), flatten(rest))
    : result.concat([first, ...result], flatten(rest));
}