import load from "./include/storage/load.js";
import writeList from "./include/writeHtml/writeList.js";

export default (function () {
  writeList(load());
})();
