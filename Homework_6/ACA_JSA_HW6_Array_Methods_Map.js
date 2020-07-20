//Task_1
//Write a function which returns array of usernames.

let getUserNames = (arr) => {
  let usernames = (el) => {
    return el.username;
  };
  return arr.map(usernames);
}

//Task_2
//Write a function which returns array of lengths of user names

let getUserNameLength = (arr) => {
  let usernameLength = (el) => {
    return el.username.length;
  };
  return arr.map(usernameLength);
}

  //Task_3
  //Write a function which parses string integers. If it's not possible to parse, then add null

  const parsInteger = (arr) => {
   let isNull = (el) => {
    if (parseInt(el)) {
      return parseInt(el);
    } else {
      return null;
    }
  };
  return arr.map(isNull);
}