//Task_1
function getGrade(score) {
    if (score <= 5) {
      return "F";
    }
    if (score > 5 && score <= 10) {
      return "E";
    }
    if (score > 10 && score <= 15) {
      return "D";
    }
    if (score > 15 && score <= 20) {
      return "C";
    }
    if (score > 20 && score <= 25) {
      return "B";
    }
    if (score > 25 && score <= 30) {
      return "A";
    }
  }
//Task_2
function getLetter(s) {
    switch (s[0]) {
      //Group_1
      case "a":
        return "A";
      case "e":
        return "A";
      case "i":
        return "A";
      case "o":
        return "A";
      case "u":
        return "A";
      //Group_2
      case "b":
        return "B";
      case "c":
        return "B";
      case "d":
        return "B";
      case "f":
        return "B";
      case "g":
        return "B";
      //Group_3
      case "h":
        return "C";
      case "j":
        return "C";
      case "k":
        return "C";
      case "l":
        return "C";
      case "m":
        return "C";
      //Group_4
      case "n":
        return "D";
      case "p":
        return "D";
      case "q":
        return "D";
      case "r":
        return "D";
      case "s":
        return "D";
      case "t":
        return "D";
      case "v":
        return "D";
      case "w":
        return "D";
      case "x":
        return "D";
      case "y":
        return "D";
      case "z":
        return "D";
    }
  }
  //Task_3
  /*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = [];
    let non_vowels = [];
    for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
        case "a":
          vowels.push(s[i]);
          break;
        case "i":
          vowels.push(s[i]);
          break;
        case "e":
          vowels.push(s[i]);
          break;
        case "o":
          vowels.push(s[i]);
          break;
        default:
          non_vowels.push(s[i]);
          break;
      }
    }
    for (let i = 0; i < vowels.length; i++) {
      console.log(vowels[i]);
    }
    for (let i = 0; i < non_vowels.length; i++) {
      console.log(non_vowels[i]);
    }
  }