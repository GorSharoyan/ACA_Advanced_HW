let searchButton = document.querySelector("#search-button");
let searchInput = document.querySelector("#search-input");
let numFound = document.querySelector("#num-found");
let table = document.querySelector("#table");
let booksInfo = document.querySelector(".books-info");
let pagination = document.querySelector("#pagination");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  let bookName = searchInput.value;
  searchInput.value = "";
  booksInfo.innerHTML = "";
  booksInfo.innerHTML = "LOADING DATA...";
  booksInfo.innerHTML = "";
  getBookInfo(bookName);
});

async function getBookInfo(bookName) {
  let response = await fetch(
    `http://openlibrary.org/search.json?q=${bookName}`
  );
  let books = await response.json();

  numFound.innerText = "";
  numFound.innerText = books.num_found;
  numFound.style.color = "#ced9d7";

  makePaginationButtons(books.num_found);

  if (numFound.innerText === "0") {
    let noInput = document.createElement("h1");
    noInput.innerText = "There is no apropriate information on this book";
    table.append(noInput);
    numFound.innerText = "";
    booksInfo.innerHTML = "";
  } else {
    renderBookList(books);
  }
}

function renderBookList(books) {
  books.docs.forEach((book) => {
    createTableRow(book);
  });
}

function createTableRow(book) {
  let tableRow = document.createElement("tr");

  let title = book.title;
  let author = book.author_name;
  let publishYear = book.first_publish_year;
  // let subject = book.subject;

  // let [a, b, c, ...rest] = subject;
  // let firstSubjects = [a, b, c];

  let tableRowValues = [title, author, publishYear];

  tableRowValues.forEach((elem) => {
    let tableRowItem = document.createElement("th");
    tableRowItem.append(elem);
    tableRow.append(tableRowItem);
  });

  booksInfo.append(tableRow);
}

function makePaginationButtons(values) {
  let pages = Math.ceil(values / 100);
  renderButtons(pages);
}

function renderButtons(pages) {
  for (let i = 1; i <= pages; i++) {
    let pageNum = document.createElement("button");
    pageNum.innerText = `${i}`;
    pagination.append(pageNum);
  }
}
