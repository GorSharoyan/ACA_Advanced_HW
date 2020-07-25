//Task_1
/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    //Creating Array with unique values ;
    let uniques = [];
    for (let i = 0; i < nums.length; i++) {
      if (uniques.indexOf(nums[i]) == -1) {
        uniques.push(nums[i]);
      }
    }
    //Creating_Assending_Array
    let clone = nums.slice();
    for (let j = 0; j < uniques.length; j++) {
      for (let i = 0; i < uniques.length; i++) {
        if (uniques[i] > uniques[i + 1]) {
          let tmp = uniques[i];
          uniques[i] = uniques[i + 1];
          uniques[i + 1] = tmp;
        }
      }
    }
    //Choosing_Second_Largest_Value_In_Array
    return uniques[uniques.length - 2];
  }

//Task_2
  /*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
      let array = s.split("");
      let reversed = array.reverse();
      let newstr = reversed.join("");
      console.log(newstr);
    } catch (error) {
      console.log(error.message);
      console.log(s);
    }
  }
  

//Task_3
/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a === 0) {
      throw new Error("Zero Error");
    }
    if (a < 0) {
      throw new Error("Negative Error");
    } else if (a > 0) {
      return "YES";
    }
  }