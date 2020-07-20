function oddDigits(numb) {
    let last = numb % 10;
    if (last == numb) {
      return (last % 2 == 0) == false;
    }
    if (numb % 2 == 0) {
      return false;
    } else {
      return oddDigits((numb - last) / 10);
    }
}
