
//Writinh_Methods_

Task_1_Writing_Map

map = (arr, fn) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(fn(arr[i]));
    }
    return res;
  };

Task_2_Writing_Filter_

filter = (arr, fn) => {
    let res = [];
    for (el of arr) {
      if (fn(el)) {
        res.push(el);
      }
    }
    return res;
  };

