let selector = document.querySelector(".selector");
let imagePlaceholder = document.querySelector(".image-placeholder");
let image = document.createElement("img");


selector.addEventListener("change", (event) => {
  if (event.target.value === "select-breed") {
    imagePlaceholder.innerText = "";
  }
  selectBreed(event.target.value);
});

async function selectBreed(breed) {
  let response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  let parse = await response.json();
  let imageSource = parse.message;
  addImage(imageSource);
}

function addImage(imageSource) {
  image.setAttribute("src", imageSource);
  imagePlaceholder.innerHTML = "";
  imagePlaceholder.append(image);
}