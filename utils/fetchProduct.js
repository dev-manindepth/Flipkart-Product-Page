import { initProduct } from "../index.js";
import {
  compareItem,
  compareWidget,
  compareWidgetContainer,
  selectedProducts,
} from "./compareProduct.js";
import { createElement } from "./createElement.js";

document.addEventListener("DOMContentLoaded", function () {
  const productListContainer =
    document.getElementsByClassName("product-list")[0];
  const loader = createElement(
    "div",
    { className: ["lds-grid"] },
    null,
    productListContainer
  );
  for (let i = 0; i < 9; i++) {
    createElement("div", {}, null, loader);
  }
  const errorMsg = productListContainer.querySelector("#error");
  if (errorMsg) {
    productListContainer.removeChild(errorMsg);
  }
  fetch("https://sandbox.nextleap.app/products/fetch")
    .then((res) => res.json())
    .then(({ productCard, footer }) => {
      productListContainer.removeChild(loader);
      initProduct(productCard, footer);
      compareWidgetContainer.innerHTML = "";
      selectedProducts.reverse().map((product) => {
        const checkbox = productListContainer.querySelector(
          `.product .addToCompare input[type="checkbox"][value="${product.productName}"]`
        );
        if (checkbox) {
          checkbox.checked = true;
        }
        const item = compareItem(product, compareWidget);
        compareWidgetContainer.appendChild(item);
      });

      const compareBtn = document.querySelector(".compare-btn");
      const compareWidgetElem = document.querySelector(".compare-widget");
      compareBtn.addEventListener("mouseover", () => {
        compareWidgetElem.style.opacity = 1;
        compareWidgetElem.style.transform = "scale(1)";
      });
      compareWidgetElem.addEventListener("mouseleave", () => {
        compareWidgetElem.style.opacity = 0;
        compareWidgetElem.style.transform = "scale(0)";
      });
    })
    .catch((err) => {
      if (document.querySelector(".lds-grid")) {
        productListContainer.removeChild(loader);
      }
      const errorElem = createElement(
        "h1",
        { id: "error" },
        ` ${err.message}`,
        productListContainer
      );
      productListContainer.appendChild(errorElem);
    });
});
