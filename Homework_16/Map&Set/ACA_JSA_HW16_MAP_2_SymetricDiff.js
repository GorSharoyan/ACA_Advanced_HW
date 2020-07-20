// Symetric difference
function symmetricDifference(set1, set2) {
  let symetricdiff = new Set(set1);
  for (el of set2) {
    if (!symetricdiff.has(el)) {
      symetricdiff.add(el);
    }
  }
  return symetricdiff;
}
symmetricDifference(setA, setC);

