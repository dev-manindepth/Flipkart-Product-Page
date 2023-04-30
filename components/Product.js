import { createElement } from "../utils/createElement.js";

const RatingAndReviews = (ratings, productTitle) => {
  const ratingReviewContainer = createElement(
    "div",
    {
      className: ["rating-review"],
    },
    null,
    productTitle
  );
  const ratingContainer = createElement(
    "div",
    { className: ["rating"] },
    null,
    ratingReviewContainer
  );
  const rating = createElement(
    "span",
    {},
    ratings.overallRating.toString(),
    ratingContainer
  );

  const ratingSvgIcon = createElement(
    "svg",
    { style: "margin-top:.4rem;font-size:0.9rem;" },
    "*",
    ratingContainer
  );
  const ratingSvgPath = createElement("path", {}, null, ratingSvgIcon);
  const reviewContainer = createElement(
    "div",
    { className: ["review"] },
    null,
    ratingReviewContainer
  );
  const ratingCount = createElement(
    "span",
    { className: ["rating-count"] },
    ratings.totalRatingsNum.toString(),
    reviewContainer
  );
  const ratingText = createElement("span", {}, "Ratings &", reviewContainer);
  const reviewCount = createElement(
    "span",
    { className: ["review-count"] },
    ratings.totalReviewsNum.toString(),
    reviewContainer
  );
  const reviewText = createElement("span", {}, "Reviews", reviewContainer);
};
const ProductAction = (title, parentElement) => {
  const compareElementWrapper = createElement(
    "div",
    { className: "addToCompare" },
    null,
    parentElement
  );
  const inputCheckboxForCompare = createElement(
    "input",
    {
      type: "checkbox",
      id: "compare",
      value: title,
    },
    null,
    compareElementWrapper
  );
  const inputCompareLabel = createElement(
    "label",
    { for: "compare" },
    "Add to Compare",
    compareElementWrapper
  );
  const addToCartWrapper = createElement(
    "div",
    { className: "addToCart" },
    null,
    parentElement
  );
  const inputCheckboxForAddCart = createElement(
    "input",
    {
      type: "checkbox",
      id: "addtocart",
      value: title,
    },
    null,
    addToCartWrapper
  );
  const inputAddToCartLabel = createElement(
    "label",
    { for: "addtocart" },
    "Add to Cart",
    addToCartWrapper
  );
  return [compareElementWrapper, addToCartWrapper];
};
const ProductTitle = (title, ratings, productDescriptionContainer) => {
  const productTitle = createElement(
    "div",
    { className: ["product-title"] },
    null,
    productDescriptionContainer
  );
  const productName = createElement(
    "h2",
    {
      className: ["product-name"],
      title,
    },
    title,
    productTitle
  );
  RatingAndReviews(ratings, productTitle);
};
const ProductPrice = (
  { mrp, finalPrice, discount: { type, data } },
  productDescriptionContainer
) => {
  const productPriceContainer = createElement(
    "div",
    {
      className: ["product-price"],
    },
    null,
    productDescriptionContainer
  );
  const priceContainer = createElement(
    "div",
    { className: ["price"] },
    null,
    productPriceContainer
  );
  const discountedPrice = createElement(
    "span",
    { className: ["discounted-price"] },
    `₹${finalPrice}`,
    priceContainer
  );
  const priceDivider = createElement(
    "div",
    { className: "product-divider" },
    null,
    priceContainer
  );
  const actualPrice = createElement(
    "span",
    { className: ["actual-price"] },
    `₹${mrp}`,
    priceDivider
  );
  const discountPercent = createElement(
    "span",
    { className: ["discount-percent"] },
    `${data}${type === "PERCENT" ? "%" : ""} off`,
    priceDivider
  );
  const fassuredImageContainer = createElement(
    "div",
    {
      className: ["fassured"],
    },
    null,
    productPriceContainer
  );
  const fassuredImageElement = createElement(
    "img",
    {
      src: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
      alt: "fassured logo",
      height: "20",
    },
    null,
    fassuredImageContainer
  );
};

const ProductOffers = (
  freeDelivery,
  exchangeOfferDiscount,
  bankOffersLink,
  productDescriptionContainer
) => {
  const productOffersContainer = createElement(
    "div",
    {
      className: ["product-offers"],
    },
    null,
    productDescriptionContainer
  );
  const freeDeliveryElem = createElement(
    "div",
    { className: ["free-delivery"] },
    freeDelivery ? "Free Delivery" : "",
    productOffersContainer
  );
  const productExchange = createElement(
    "div",
    { className: ["product-exchange"] },
    `upto <b>₹ ${exchangeOfferDiscount.data}</b> off on exchange`,
    productOffersContainer
  );
  const bankOffer = createElement(
    "div",
    { className: ["bank-offer"], style: `color: ${bankOffersLink.textColor};` },
    bankOffersLink.buttonText,
    productOffersContainer
  );
};
const ProductDescription = (featuresList, productDescriptionContainer) => {
  const productDescription = createElement(
    "div",
    {
      className: ["product-description"],
    },
    null,
    productDescriptionContainer
  );
  const featuresListContainer = createElement(
    "ul",
    {},
    null,
    productDescription
  );
  const featuresItemList = createElement(
    "li",
    {},
    featuresList,
    featuresListContainer
  );
};
const ProductImage = (image, productImageContainer) => {
  const productImage = createElement(
    "div",
    { className: ["product-image"] },
    null,
    productImageContainer
  );
  const productImageElement = createElement(
    "img",
    {
      ...image,
      src: image.url,
      className: "product-img",
    },
    null,
    productImage
  );
  const favouriteContainer = createElement(
    "div",
    { className: "favourite" },
    null,
    productImage
  );

  const heartSvgImage = createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 20 16",
    },
    null,
    favouriteContainer
  );
  const svgPathElement = createElement(
    "path",
    {
      d: "M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z",
      fill: "#c8c8c8",
      class: "eX72wL",
      stroke: "#FFF",
      "fill-rule": "evenodd",
      opacity: ".9",
    },
    null,
    heartSvgImage
  );
};
const InitProductImageContainer = (title, image, productWrapper) => {
  const productImageContainer = createElement(
    "div",
    {
      className: ["product-image-container"],
    },
    null,
    productWrapper
  );
  ProductImage(image, productImageContainer);
  ProductAction(title, productImageContainer);
};
const InitProductDescriptionContainer = (
  title,
  ratings,
  price,
  featuresList,
  freeDelivery,
  exchangeOfferDiscount,
  bankOffersLink,
  productWrapper
) => {
  const productDescriptionContainer = createElement(
    "div",
    {
      className: ["product-description-container"],
    },
    null,
    productWrapper
  );
  ProductTitle(title, ratings, productDescriptionContainer);
  ProductPrice(price, productDescriptionContainer);
  ProductDescription(featuresList, productDescriptionContainer);
  ProductOffers(
    freeDelivery,
    exchangeOfferDiscount,
    bankOffersLink,
    productDescriptionContainer
  );
};
export const createProduct = (
  {
    title,
    image,
    ratings,
    featuresList,
    freeDelivery,
    price,
    exchangeOfferDiscount,
    bankOffersLink,
    productPageLink,
  },
  productListContainer
) => {
  const singleProductWrapper = createElement(
    "div",
    { className: ["product-item"] },
    null,
    productListContainer
  );
  const linkWrapper = createElement(
    "a",
    { href: productPageLink.url, target: "_blank" },
    null,
    singleProductWrapper
  );
  const productWrapper = createElement(
    "div",
    { className: ["product"] },
    null,
    linkWrapper
  );
  InitProductImageContainer(title, image, productWrapper);
  InitProductDescriptionContainer(
    title,
    ratings,
    price,
    featuresList,
    freeDelivery,
    exchangeOfferDiscount,
    bankOffersLink,
    productWrapper
  );
  return singleProductWrapper;
};
