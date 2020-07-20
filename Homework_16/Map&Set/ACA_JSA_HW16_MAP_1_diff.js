
//Difference
function difference(set1, set2) {
    let diff = new Set(set1);
    for (el of set2) {
      if (diff.has(el)) {
        diff.delete(ele);
      }
    }
    return diff;
  }
  difference(setA, setC);