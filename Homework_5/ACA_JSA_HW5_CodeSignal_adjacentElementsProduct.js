//CodeSignal_adjacentElementsProduct_without_using_methods
function adjacentElementsProduct(inputArray) {
  let productarr = [];
  for (let i = 0; i < inputArray.length - 1; i++) {
    productarr.push(inputArray[i] * inputArray[i + 1]);
  }
  let max = productarr[0];
  for (let i = 0; i < productarr.length; i++) {
    if (max < productarr[i]) {
      max = productarr[i];
    }
  }
  return max;
}
