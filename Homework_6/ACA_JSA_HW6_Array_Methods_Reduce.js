
//Task_1
/*Reduce
Your function must use reduce

Write a function which calculates average age of users.
*/


let calcSum = (acc, el) => {
    return (acc += el.age);
  };
  let getAverageAge = (arr) => {
    return arr.reduce(calcSum, 0) / arr.length;
  };