let tableBody = document.querySelector(".table-body");

fetch("https://ghibliapi.herokuapp.com/films")
  .then((data) => data.json())
  .then((data) => {
    data.forEach(({ title, description, director, producer, release_date }) => {
      createTableRow([title, description, director, producer, release_date]);
    });
  });

function createTableRow(values) {
  let list = document.createElement("li");
  let litItem = document.createElement("ul");
  litItem.className = "movies-list";

  values.forEach((value) => {
    let headings = [
      "Title:",
      "Descriptor:",
      "Director:",
      "Producer:",
      "Date Released:",
    ];

    let heading = document.createElement("h4");
    heading.innerText = headings[values.indexOf(value)];
    litItem.append(heading);

    let valueDesc = document.createElement("p");
    valueDesc.innerText = value;
    litItem.append(valueDesc);
  });

  list.append(litItem);
  tableBody.append(list);
}
