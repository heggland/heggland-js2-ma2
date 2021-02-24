import script, { books } from "../../script.js";

function removeItem() {
  const checkbox = document.querySelectorAll(".load-content input");

  checkbox.forEach((list) => {
    list.addEventListener("click", handleClick);
  });
}

function handleClick() {
  const isbnRemove = event.target.dataset.item;
  console.log(isbnRemove);

  let newIntel = books.filter((item) => item.isbn !== isbnRemove);

  if (newIntel.length < 1) {
    newIntel = [];
  }

  script(newIntel);
}

export default removeItem;
