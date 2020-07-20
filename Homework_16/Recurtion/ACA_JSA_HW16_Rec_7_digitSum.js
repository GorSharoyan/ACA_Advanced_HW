function digitSum(num) {
    if (num < 10) {
      return num;
    }
    let digits = num
      .toString()
      .split("")
      .map((el) => Number(el));
    let sum = digits.reduce((first, next) => first + next, 0);
    
    return digitSum(sum);
  }