class Account {
  constructor(id, name, balance) {
    this._id = id;
    this._name = name;
    this._balance = balance;
  }

  get id() {
    return "ID:" + this._id;
  }
  get name() {
    return (
      "Name:" +
      this._name[0].toUpperCase() +
      this._name.slice(1, this._name.length)
    );
  }
  get balance() {
    return "Balance:$" + this._balance;
  }
  set name(name) {
    if (name.trim() == "") {
      throw new Error("Name is not Defined");
    }
    this._name = name.trim;
  }
  set balance(balance) {
    if (balance.trim() == "") {
      throw new Error("Balance is not Defined");
    }
    this._name = name.trim;
  }
  credit(amount) {
    return this._balance + amount;
  }
  debit(amount) {
    return this._balance - amount;
  }
  static transferTo(accountFirst, accountSecond) {
    return (
      Object.values(accountFirst).toString() ==
      Object.values(accountSecond).toString()
    );
  }
  toString() {
    return `
  'Class:Account'
  'Name:'${this._name}
  'Balace:'${this._balance}
  'ID:'${this._id}
  `;
  }
}