function variables(value) {
  const write = document.querySelector(".load-content");

  // inner-inner html
  const innerWriteValue = "product-content";
  const innerWrite = document.querySelector(".product-content");

  if (value == `write`) {
    return write;
  } else if (value == `innerWriteValue`) {
    return innerWriteValue;
  } else if (value == `innerWrite`) {
    return innerWrite;
  }
}

export default variables;
