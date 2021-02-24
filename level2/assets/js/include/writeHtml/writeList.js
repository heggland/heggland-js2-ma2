import addItem from "../event/addItem.js";
import removeItem from "../event/removeItem.js";
import variables from "../variables.js";

function writeBooks(intel) {
  variables(`write`).innerHTML = `
    <table>
           <tr>
               <th class="table table__title">Id</th>
               <th class="table table__isbn">Content</th>
               <th class="table__check"></th>
          </tr>
       <table class="${variables(`innerWriteValue`)}"></table>
    </table>
    `;

  if (intel) {
    for (let i = 0; i < intel.length; i++) {
      const title = intel[i].title;
      const id = intel[i].id;

      let textId = i + 1;

      variables(`innerWrite`).innerHTML += `
      <table>
      <tr>
      <td class="table__title">${textId}</td>
      <td class="table__isbn">${title}</td>
      <td class="table__check"><i class="fa fa-trash" data-item="${id}"></td>
      </tr>
      </table>
      
      
      `;
    }

    addItem();
    removeItem();
  } else {
    variables(
      `innerWrite`
    ).innerHTML += `<p>No more items in the list 😵 Add some more 😸 </p>`;
  }
}

export default writeBooks;
