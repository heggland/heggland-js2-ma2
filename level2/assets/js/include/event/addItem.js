import save from "../storage/save.js";
import load from "../storage/load.js";
import variables from "../variables.js";
import writeBooks from "../writeHtml/writeList.js";

function addItem() {
  variables(`addItem`).addEventListener("click", handleClick);
}

function handleClick() {
  const newItem = variables(`listInput`).value.trim();
  const data = load();

  if (newItem.length >= 2) {
    data.push({ id: Date(), title: newItem });
    writeBooks(data);
    save(data);
    variables(`listInput`).value = "";
    variables(`listInput`).focus();
  }
}

export default addItem;
