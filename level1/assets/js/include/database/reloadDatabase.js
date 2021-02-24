import script from "../../script.js";
import writeBooks from "../writeHtml/writeBooks.js";
import database from "./database.js";

export default function reloadDatabase() {
  const reload = document.querySelector(".reload");

  reload.addEventListener("click", () => {
    // location.reload();
    let books = database;
    script(books);
  });
}
