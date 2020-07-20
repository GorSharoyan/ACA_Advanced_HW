class Author {
  constructor(atrName, email, gender) {
    this.atrName = atrName;
    this.email = email;
    this._gender = gender;
  }

  get name() {
    if (this.atrName === "Remark") {
      return `${this.atrName}${" is classic"}`;
    }
  }
  get gender() {
    if (this.gender === "M") {
      return `${this.atrName}${"is a man"}`;
    }
    return `${this.atrName}${"is a woman"}`;
  }
  toString() {
    return `"Class:Autors"
    Name:${this.atrName}
    E-mail:${this._email}
    Gender:${this._gender}`;
  }
}
// let Remark = new Author("Remark", "archOftriumph@gmail.com", "M");

class Book extends Author {
  constructor(title, atrName, price, quantity) {
    super(atrName);
    this._title = title;
    this._price = price;
    this._quantity = quantity;
  }
  get title() {
    return this._title;
  }
  get author() {
    return this.atrName;
  }
  set price(price) {
    if (typeof price != "Number") {
      throw new Error("Inapropriate price");
    }
  }
  set quantity(quantity) {
    if (typeof quantity != "Number") {
      throw new Error("Inapropriate quantity");
    }
  }
  toString() {
    return `"Class:Books"
    Autor Name:${this._atrName}
    Book Title:${this._title}
    Book Price:${this._price}$
    Book quantity:${this._quantity}
    `;
  }
  getProfit() {
    return `Profit = ${this._price * this._quantity}`;
  }
}

