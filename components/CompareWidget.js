import { selectedProducts } from "../utils/compareProduct.js";
import { createElement } from "../utils/createElement.js";

export const compareBtn = () => {
  const compareElemWrapper = createElement("div", {
    className: ["compare-btn"],
  });
  const compareText = createElement("span", {}, "COMPARE", compareElemWrapper);
  const compareCount = createElement(
    "span",
    { className: ["compare-count"] },
    selectedProducts.length.toString(),
    compareElemWrapper
  );
  return compareElemWrapper;
};

export const compareItem = (
  { imgSrc, productName },
  compareWidgetContainer
) => {
  const compareItemElem = createElement(
    "div",
    { className: ["compare-item"] },
    null,
    compareWidgetContainer
  );
  const productImage = createElement(
    "img",
    { src: imgSrc, alt: productName },
    null,
    compareItemElem
  );
  const productNameElem = createElement(
    "div",
    { className: ["product-name"], "data-name": productName },
    productName.length > 15 ? `${productName.slice(0, 15)}...` : productName,
    compareItemElem
  );
  const removeProduct = createElement(
    "div",
    { className: ["remove-product"] },
    "x",
    compareItemElem
  );
  return compareItemElem;
};
export const createCompareWidget = () => {
  const compareWidget = createElement("div", { className: ["compare-widget"] });
  const compareWidgetContainer = createElement(
    "div",
    {
      className: "compare-widget-container",
    },
    null,
    compareWidget
  );

  return [compareWidget, compareWidgetContainer];
};
