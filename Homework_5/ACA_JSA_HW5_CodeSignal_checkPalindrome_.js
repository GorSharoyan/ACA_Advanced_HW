
//CodeSignal_Check_If_Polinrome_With_Using_array_and_String_methods
function checkPalindrome(inputString) {
  let check = inputString.split().reverse().join();
  if (check == inputString) {
    return true;
  } else {
    return false;
  }
}