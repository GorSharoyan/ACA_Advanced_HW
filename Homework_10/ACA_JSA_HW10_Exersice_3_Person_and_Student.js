class Person {
    constructor(firstName, lastName, gender, age) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._gender = gender;
      this._age = age;
    }
    get firstName() {
      return (
        this._firstName[0].toUpperCase() +
        this._firstName.slice(1, this._firstName.length)
      );
    }
    get lastName() {
      return (
        this._lastName[0].toUpperCase() +
        this._lastName.slice(1, this._lastName.length)
      );
    }
    get gender() {
      if (this._gender == "M") {
        return `${this._firstName} ${this._lastName} ${"is Male"}`;
      }
      return `${this._firstName} ${this._lastName} ${"is Female"}`;
    }
    get age() {
      if (this._age < 18) {
        return "Sory!";
      }
      return `${this._age} y.o`;
    }
  
    toString() {
      return `
    'Class:Person'
     FirstName:${this._firstName}
     LastName: ${this._lastName}
     Gender: ${this._gender}
     Age: ${this._age}
    `;
    }
  }
  
  class Student extends Person {
    constructor(firstName, lastName, gender, age, year, fee, program) {
      super(firstName, lastName, gender, age);
      this._year = year;
      this._fee = fee;
      this.passedExams = program.map((prog) => ({
        name: prog,
        grade: 0,
      }));
    }
    get year() {
      return `Year${this._year}`;
    }
    get fee() {
      if (this._fee <= 0) {
        throw new Error("Invaild Value");
      }
      return this._fee;
    }
    set year(year) {
      if (typeof year != "number") {
        throw new Error("Value is not a number");
      }
    }
    set fee(fee) {
      if (typeof fee != "number") {
        throw new Error("Value is not a number");
      }
    }
    examPass(name, grade) {
      this.passedExams = this.passedExams.map((prog) => {
        if (prog.name == name) {
          return {
            name,
            grade,
          };
        }
        return prog;
      });
  
      if (this.passedExams.every((prog) => prog.grade >= 50)) {
        this._year++;
      }
    }
    toString() {
      return `
      Class:Student
      _Proto_:Person
      FirstName:${this._firstName}
      LastName: ${this._lastName}
      Gender: ${this._gender}
      Age: ${this._age}
      Programm:${this.program}
      Year:${this.year}
      Fee:${this.fee}
          (-__-)
      `;
    }
  }
  
  // let studentGor = new Student("Gor", "Sharoyan", "M", 25, 2020, 2000, [
  //   "Math",
  //   "History",
  //   "Physics",
  // ]);