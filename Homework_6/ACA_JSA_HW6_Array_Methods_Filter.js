//Task_1
//Write a function which remove users with language equals to 'ru'.

let filterUsers = (arr, arg) => {
  let removeLang = (el) => {
    return el.lang != arg;
  };
  return arr.filter(removeLang);
};


//Task_2
//Write a function which filters object by field.

let onlyAstronauts = (el) => {
  return el.isAstronaut;
};
let filterByField = (arr) => {
  return arr.filter(onlyAstronauts);
};
