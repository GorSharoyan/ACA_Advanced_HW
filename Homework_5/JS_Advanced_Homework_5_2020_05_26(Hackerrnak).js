//HacherRank
//EDay0
function factorial (n) {
    let result=1;
    for(let i = 0 ; i <= n ; i++){
        result+=i;
    }
    return result;
   }
   //Day_3
   function getSecondLargest(nums) {
    //Creating Array with unique values ;
    let uniques = [];
    for (let i = 0; i < nums.length; i++) {
      if (uniques.indexOf(nums[i]) == -1) {
        uniques.push(nums[i]);
      }
    }
    //Creating_Assending_Array
    var clone = nums.slice();
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
    console.log(uniques[uniques.length - 2]);
  }
  