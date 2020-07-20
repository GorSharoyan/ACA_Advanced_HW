function rest(arr, result = []) {
    if (arr.length === 1) {
      return result;
    }
    if (arr.length === 0) {
      return [];
    }
    result.push(arr[1]);
    return rest(arr.slice(1, arr.length), result);
  }
  