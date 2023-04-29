import { productJSON } from "./productData.js";
import { createProduct } from "./components/Product.js";
import { selectedProducts } from "./utils/compareProduct.js";
import { compareBtn, createCompareWidget } from "./components/CompareWidget.js";
const initProduct = () => {
  const productListContainer = document.getElementsByClassName("product-list");
  const productList = productJSON.map((product) => {
    const prod = createProduct(product, productListContainer);
    productListContainer[0].appendChild(prod);
  });
  const compareBtnElement = compareBtn();
  const firstScriptTag= document.getElementsByTagName('script')[0];
  document.body.insertBefore(compareBtnElement,firstScriptTag)
};
initProduct();
