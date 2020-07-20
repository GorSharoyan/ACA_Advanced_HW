class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  toString() {
    return `
   Class: Book
   Author:${this._author}
   Title:${this._title}
   `;
  }
}

class LibraryBookBase extends Book {
  constructor(title, author, bookId) {
    super(title, author);
    this._bookId = bookId;
  }
  get bookId() {
    return this._bookId;
  }
  toString() {
    return `
   Class: LibraryBookBase
   Author:${this._author}
   Title:${this._title}
   Book_ID:${this._bookId}
   `;
  }
}

class LibraryBook extends LibraryBookBase {
  constructor(title, author, bookId, quantity) {
    super(title, author, bookId);
    this._quantity = quantity;
  }
  get quantity() {
    return this._quantity;
  }
  set(title) {
    if (typeof title != "string") {
      throw new Error("Invalid format");
    }
  }
  set(author) {
    if (typeof author != "string") {
      throw new Error("Invalid format");
    }
  }
  set(bookId) {
    if (typeof bookId != "number") {
      throw new Error("Invalid format");
    }
  }
  set(quantity) {
    if (typeof quantity != "number") {
      throw new Error("Invalid format");
    }
  }
  increaseQuantityBy(amount) {
    this._quantity = this.quantity + amount;
  }
  decreaseQuantityBY(amount) {
    this._quantity = this.quantity - amount;
  }
  toString() {
    return `
   Class: LibraryBook
   Author:${this._author}
   Title:${this._title}
   Book_ID:${this._bookId}
   Qunatity:${this._quantity}
      `;
  }
}

let Book1 = new LibraryBook("White Fang", "Jack London", 124, 12);
let Book2 = new LibraryBook("1984", "Georges Orwell", 125, 15);
let Book3 = new LibraryBook("the end of Eternity", "Isaac Asimov", 127, 1);

class ReaderBook extends LibraryBook {
  constructor(title, author, bookId, quantity, expirationDate, isReturned) {
    super(title, author, bookId, quantity);
    this._expiratonDate = expirationDate;
    this._isReturned = isReturned;
  }
  get expirationDate() {
    return this._expiratonDate;
  }
  get isReturned() {
    return this._isReturned;
  }

  set(expirationDate) {
    if (typeof expirationDate != "string") {
      throw new Error("Invaild format");
    }
  }

  set(isReturned) {
    if (typeof isReturned != "boolean") {
      throw new Error("Invaild format");
    }
  }

  toString() {
    return `
   Class: ReaderBook
   Author:${this._author}
   Title:${this._title}
   Book_ID:${this._bookId}
   Quantity:${this._quantity}
   ExpiratonDate:${this._expiratonDate}
   is Returned:${this._isReturned}
      `;
  }
}
// let ReaderBook1 = new ReaderBook(
//   "white fang",
//   "Jack London",
//   124,
//   15,
//   "15/02/2021",
//   true
// );
// let ReaderBook2 = new ReaderBook(
//   "star rover",
//   "Jack London",
//   145,
//   "15/03/2022",
//   false
// );

class Reader {
  constructor(firstName, lastName, readerId, books) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._readerId = readerId;
    this._books = books;
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
  get readerId() {
    return this._readerId;
  }
  get books() {
    return this._books;
  }
  set(firstName) {
    if (typeof fistName != "string") {
      throw new Error("Invaild Format");
    }
  }
  set(lastName) {
    if (typeof lastName != "string") {
      throw new Error("Invaild Format");
    }
  }
  set(readerId) {
    if (typeof readerId != "number") {
      throw new Error("Invaild Format");
    }
  }
  set(books) {
    if (typeof books != "array") {
      throw new Error("Invaild Format");
    }
  }
  borrowBook(book) {
    return LibraryBook;
  }
  toString() {
    return `
        Class:Reader
        FirstName:${this._firstName}
        LastName:${this._lastName}
        ReaderID:${this._readerId}
        Books:${this._books}
                (^_^)
        `;
  }
}

// let Reader1 = new Reader("Gor", "Sharoyan", 16, [ReaderBook1, ReaderBook2]);
// let Reader2 = new Reader("Anun", "Azganun", 17, [ReaderBook1, ReaderBook2]);

class Library {
  constructor(books, readers) {
    this._books = books;
    this._readers = readers;
  }

  get books() {
    return this._books;
  }
  get readers() {
    return this._readers;
  }
  set(books) {
    if (typeof books != "array") {
      throw new Error("Invalid Format!!!");
    }
  }
  set(readers) {
    if (typeof readers != "array") {
      throw new Error("Invalid Format!!!");
    }
  }
  doHaveBook(book) {
    return this._books.some((bk) => bk.title == book);
  }
  checkReaderId(readerId) {
    return this._readers.some((rd) => rd._readerId == readerId);
  }
  addBook(book) {
    if (this._books.find((bk) => bk._title == book._title)) {
      this._books.find((bk) => bk._title == book._title)._quantity += 1;
    }
    this._books.push(book);
  }
  lendBook(book, readerId) {
    return (
      this._books.some((bk) => bk._quantity == book._qunatity) &&
      this._readers.some((rd) => rd._readerId == readerId)
    );
  }
}
// let Library1 = new Library([ReaderBook1], [Reader1, Reader2]);