function variables(value) {
  const write = document.querySelector(".load-content");

  // inner-inner html
  const innerWriteValue = "product-content";
  const innerWrite = document.querySelector(".product-content");
  const addItem = document.getElementById("addItem");
  const listInput = document.querySelector("input");

  if (value == `write`) {
    return write;
  } else if (value == `innerWriteValue`) {
    return innerWriteValue;
  } else if (value == `innerWrite`) {
    return innerWrite;
  } else if (value == `addItem`) {
    return addItem;
  } else if (value == `listInput`) {
    return listInput;
  }
}

export default variables;
