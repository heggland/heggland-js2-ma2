import database from "./include/database/database.js";
import writeBooks from "./include/writeHtml/writeBooks.js";

export let books = database;

export default function start(newBooks) {
  if (newBooks) {
    books = newBooks;
  }
  writeBooks(books);
}

start();
