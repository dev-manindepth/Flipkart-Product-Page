import {
  compareItem,
  createCompareWidget,
} from "../components/CompareWidget.js";
const productlist = document.querySelector(".product-list");

const body = document.getElementsByTagName("body");
const [compareWidget, compareWidgetContainer] = createCompareWidget();
export {compareItem,compareWidget,compareWidgetContainer}
export let selectedProducts = [];
if (localStorage.getItem("selectedProducts")) {
  selectedProducts = JSON.parse(localStorage.getItem("selectedProducts"));
}

const firstScriptTag = document.getElementsByTagName("script")[0];
document.body.insertBefore(compareWidget, firstScriptTag);
compareWidgetContainer.innerHTML = "";



// Using Event Delegation to attach a "change" event listener to the parent element of all the checkboxes
productlist.addEventListener("change", (event) => {
  if (event.target.matches('.addToCompare input[type="checkbox"]')) {
    const productContainer = event.target.closest(".product");
    const productName =
      productContainer.querySelector(".product-name").textContent;

    const productImage = productContainer
      .querySelector(".product-img")
      .getAttribute("src");
    if (event.target.checked) {
      selectedProducts.push({
        productName: productName,
        imgSrc: productImage,
      });
      // Store the updated selectedProducts array in localStorage
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(selectedProducts)
      );
      console.log(event.target);
    } else {
      selectedProducts = selectedProducts.filter(
        (product) => product.productName !== productName
      );
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(selectedProducts)
      );
      const compareItemElem = compareWidgetContainer.querySelector(
        `[alt="${productName}"]`
      );
      if (compareItemElem) {
        compareWidgetContainer.removeChild(compareItemElem.parentNode);
      }
    }

    // const firstScriptTag = document.getElementsByTagName("script")[0];
    document.body.insertBefore(compareWidget, firstScriptTag);
    const compareBtn = document.querySelector(".compare-btn");
    if (selectedProducts.length == 0) {
      body[0].removeChild(compareWidget);
      compareBtn.style.display = "none";
    } else {
      compareBtn.style.display = "flex";
    }

    compareWidgetContainer.innerHTML = "";
    selectedProducts.reverse().map((product) => {
      const item = compareItem(product, compareWidget);
      compareWidgetContainer.appendChild(item);
    });

    const compareCountElem = document.querySelector(".compare-count");
    compareCountElem.textContent = selectedProducts.length;
  }
});

compareWidgetContainer.addEventListener("click", (event) => {
  const product = event.target.closest(".compare-item");
  const productNameElem = product.querySelector(".product-name");
  const productName = productNameElem.getAttribute("data-name");
  selectedProducts = selectedProducts.filter((product) => {
    return product.productName !== productName;
  });
  localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
  compareWidgetContainer.removeChild(product);
  const productlist = document.querySelector(".product-list");
  const checkbox = productlist.querySelector(
    `.product .addToCompare input[type="checkbox"][value="${productName}"]`
  );
  const compareCountElem = document.querySelector(".compare-count");
  const compareBtn = document.querySelector(".compare-btn");
  compareCountElem.textContent = selectedProducts.length;
  checkbox.checked = false;
  if (selectedProducts.length == 0) {
    body[0].removeChild(compareWidget);
    compareBtn.style.display = "none";
  } else {
    compareBtn.style.display = "flex";
  }
});
