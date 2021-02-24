import reloadDatabase from "../database/reloadDatabase.js";
import removeItem from "../event/removeItem.js";
import variables from "../variables.js";

function writeBooks(books) {
  console.log(books);

  variables(`write`).innerHTML = `
    <table>
           <tr>
               <th class="table table__title">Rating</th>
               <th class="table table__isbn">ISBN</th>
               <th class="table__check"></th>
          </tr>
       <table class="${variables(`innerWriteValue`)}"></table>
    </table>
    `;

  if (books.length) {
    for (let i = 0; i < books.length; i++) {
      const bookTitle = books[i].title;
      const bookIsbn = books[i].isbn;

      const checked = "checked";

      variables(`innerWrite`).innerHTML += `
    <table>
        <tr>
            <td class="table__title">${bookTitle}</td>
            <td class="table__isbn">${bookIsbn}</td>
            <td class="table__check">
              <input type="checkbox" name="book list" class="checkbox-${i}" value="${i}" data-item="${bookIsbn}" ${checked} >
            </td>
        </tr>
    </table>
    `;
    }

    removeItem(books);
  } else {
    variables(
      `innerWrite`
    ).innerHTML += `<p>No more items in array</p><button class="reload">Reload</button>`;
    reloadDatabase();
  }
}

export default writeBooks;
