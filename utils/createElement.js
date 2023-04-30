/**
 *
 * @param {string} type
 * @param {object} attr
 * @param {string} child
 * @param {string} parent 
 */

const isHTMLElement = (str) => {
  if (str.nodeType === Node.ELEMENT_NODE) {
    return true;
  } else {
    const parser = new DOMParser();
    const document = parser.parseFromString(str, "text/html");
    return Array.from(document.body.childNodes).some(
      (node) => node.nodeType === Node.ELEMENT_NODE
    );
  }
};
export const createElement = (type, attr, child, parent) => {
  const elementList = [];
  const element = document.createElement(type);

  if (Array.isArray(child)) {
    child.forEach((element) => {
      const singleListElement = document.createElement(type);
      for (let attribute in attr) {
        singleListElement.setAttribute(
          attribute === "className" ? "class" : attribute,
          Array.isArray(attr[attribute])
            ? attr[attribute].join(" ")
            : attr[attribute]
        );
      }
      if (isHTMLElement(element)) {
        singleListElement.innerHTML = element;
      } else {
        singleListElement.innerText = element;
      }
      elementList.push(singleListElement);
    });
    if (parent && isHTMLElement(parent)) {
      elementList.forEach((element)=>{
        parent.appendChild(element);
      })
    }
  } else if (typeof child === "string") {
    for (let attribute in attr) {
      element.setAttribute(
        attribute === "className" ? "class" : attribute,
        Array.isArray(attr[attribute])
          ? attr[attribute].join(" ")
          : attr[attribute]
      );
    }
    if (isHTMLElement(child)) {
      element.innerHTML = child;
    } else {
      element.innerText = child;
    }
    if (parent && isHTMLElement(parent)) {
      parent.appendChild(element);
    }
  } else if (child == null || child == undefined) {
    for (let attribute in attr) {
      element.setAttribute(
        attribute === "className" ? "class" : attribute,
        Array.isArray(attr[attribute])
          ? attr[attribute].join(" ")
          : attr[attribute]
      );
    }
    if (parent && isHTMLElement(parent)) {
      parent.appendChild(element);
    }
  }
  return Array.isArray(child) ? elementList : element;
};
