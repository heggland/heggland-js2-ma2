import writeList from "../writeHtml/writeList.js";
import save from "../storage/save.js";
import load from "../storage/load.js";
import { listKey } from "../settings.js";

function removeItem() {
  const removeItem = document.querySelectorAll(".load-content i");
  removeItem.forEach((list) => {
    list.addEventListener("click", handleClick);
  });
}

function handleClick() {
  let loadFromStorage = load(listKey);

  const intel = loadFromStorage;

  const idRemove = event.target.dataset.item;

  let newIntel = intel.filter((item) => item.id !== idRemove);

  save(newIntel);

  if (newIntel.length == 0) {
    newIntel = ``;
  }

  writeList(newIntel);
}

export default removeItem;
