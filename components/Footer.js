import { createElement } from "../utils/createElement.js";

const FooterColumnsAboutLinks = (data, footerAbout) => {
  const footerAboutLinks = createElement(
    "div",
    { className: ["footer-about-links"] },
    null,
    footerAbout
  );
  const footerAboutLinkContact = createElement(
    "a",
    { className: "footer-about-contact" },
    data[0],
    footerAboutLinks
  );
  const footerAboutLinkAbout = createElement(
    "a",
    { className: "footer-about-about" },
    data[1],
    footerAboutLinks
  );
  const footerAboutLinkCareers = createElement(
    "a",
    { className: "footer-about-careers" },
    data[2],
    footerAboutLinks
  );
  const footerAboutLinkFstories = createElement(
    "a",
    { className: "footer-about-fstories" },
    data[3],
    footerAboutLinks
  );
  const footerAboutLinkPress = createElement(
    "a",
    { className: "footer-about-press" },
    data[4],
    footerAboutLinks
  );
  const footerAboutLinkFwholesale = createElement(
    "a",
    { className: "footer-about-fwholesale" },
    data[5],
    footerAboutLinks
  );
  const footerAboutLinkCorporate = createElement(
    "a",
    { className: "footer-about-corporate" },
    data[6],
    footerAboutLinks
  );
  return footerAboutLinks;
};
const FooterColumnsAbout = (about, footerColumns) => {
  const footerAbout = createElement(
    "div",
    { className: ["footer-about"] },
    null,
    footerColumns
  );
  const heading = createElement(
    "div",
    { className: ["heading"] },
    null,
    footerAbout
  );
  const headingText = createElement(
    "div",
    { className: ["footer-about-text"] },
    about.title.toUpperCase(),
    heading
  );
  const footerAboutLinks = FooterColumnsAboutLinks(about.data, footerAbout);
  return footerAbout;
};
const FooterColumnsHelpLinks = (data, footerHelp) => {
  const footerHelpLinks = createElement(
    "div",
    { className: ["footer-help-links"] },null,
    footerHelp
  );
  createElement(
    "a",
    { className: ["footer-help-payments"] },
    data[0],
    footerHelpLinks
  );
  createElement(
    "a",
    { className: ["footer-help-shipping"] },
    data[1],
    footerHelpLinks
  );
  createElement(
    "a",
    { className: ["footer-help-cancel"] },
    data[2],
    footerHelpLinks
  );
  createElement(
    "a",
    { className: ["footer-help-faq"] },
    data[3],
    footerHelpLinks
  );
  createElement(
    "a",
    { className: ["footer-help-report"] },
    data[4],
    footerHelpLinks
  );
  return footerHelpLinks;
};
const FooterColumnsHelp = (help, footerColumns) => {
  const footerHelp = createElement(
    "div",
    { className: ["footer-help"] },
    null,
    footerColumns
  );
  const footerHeading = createElement(
    "div",
    { className: ["heading"] },
    null,
    footerHelp
  );
  createElement("div", {}, help.title, footerHeading);
  FooterColumnsHelpLinks(help.data, footerHelp);
  return footerHelp;
};
const FooterColumnsPolicy = (policy, footerColumns) => {
  const footerConsumer = createElement(
    "div",
    { className: ["footer-consumer"] },
    null,
    footerColumns
  );
  const footerConsumerHeading = createElement(
    "div",
    { className: ["heaing"] },
    null,
    footerConsumer
  );
  const footerConsumerHeadingText = createElement(
    "div",
    {},
    policy.title,
    footerConsumerHeading
  );
  const footerConsumerPolicy = createElement(
    "div",
    { className: ["footer-consumer-policy"] },
    null,
    footerConsumer
  );
  createElement("a", { href: "#" }, policy.data, footerConsumerPolicy);
  return footerConsumer;
};
const FooterColumnsSocail = (social, footerColumns) => {
  const footerSocial = createElement(
    "div",
    { className: ["footer-social"] },
    null,
    footerColumns
  );
  const footerSocialHeading = createElement(
    "div",
    { className: ["heading"] },
    null,
    footerSocial
  );
  createElement("div", {}, social.title, footerSocialHeading);
  const footerSocialLinks = createElement(
    "div",
    { className: ["footer-social-links"] },
    null,
    footerSocial
  );
  createElement("a", { href: "#" }, social.data, footerSocialLinks);
  return footerSocial;
};
const FootercolumnsMail = (mail, footerColumns) => {
  const footerMail = createElement(
    "div",
    { className: ["footer-mail"] },
    null,
    footerColumns
  );
  const footerMailHeading = createElement(
    "div",
    { className: ["heading"] },
    null,
    footerMail
  );
  createElement("div", {}, mail.title, footerMailHeading);
  const footerMailItems = createElement(
    "div",
    { className: ["footer-mail-items"] },
    null,
    footerMail
  );
  const mailItems1 = mail.data.split(",").slice(0, 5);
  const mailItems2 = mail.data.split(",").slice(5).slice(0, 2).join(",");
  const mailItems3 = mail.data.split(",").slice(5).slice(2).join(",");
  createElement(
    "p",
    {},
    [...mailItems1, mailItems2, mailItems3],
    footerMailItems
  );
};
const transformAddress = (address) => {
  const addressInfo1 = address.split(",")[0] + ",";
  const addressInfo2 = address.split("&")[0].split(",").slice(1) + "&";
  const addressInfo3 = address.split("&")[1].split(",").shift() + ",";
  const addressInfo4 = address.split(",").slice(3, 5).join(",") + ",";
  const addressInfo5 = address.split(",").slice(5, 7).join(",") + ",";
  const addressInfo6 = address.split(",").slice(7, 9).join(",").split("CIN")[0];
  const addressInfo7 = address
    .split(",")
    .slice(8, 9)
    .join(",")
    .split("India")[1]
    .split("Telephone")[0];
  const addressInfo8 = address
    .split(",")
    .slice(8)
    .join(" ")
    .split("U51109KA2012PTC066107")[1];
  return [
    addressInfo1,
    addressInfo2,
    addressInfo3,
    addressInfo4,
    addressInfo5,
    addressInfo6,
    addressInfo7,
    addressInfo8,
  ];
};
const FooterColumnsOffice = (office, footerColumns) => {
  const footerRegisteredOffice = createElement(
    "div",
    {
      className: ["footer-registered-office-address"],
    },
    null,
    footerColumns
  );
  const footerOfficeHeading = createElement(
    "div",
    { className: ["heading"] },
    null,
    footerRegisteredOffice
  );
  createElement("div", {}, office.title, footerOfficeHeading);
  const footerOfficeAddressItems = createElement(
    "div",
    {
      className: ["footer-registered-office-address-items"],
    },
    null,
    footerRegisteredOffice
  );
  const transformedAddress = transformAddress(office.data).slice(0, 7);
  const telephoneText = transformAddress(office.data)
    .slice(7)
    .join(" ")
    .split(":")[0];
  const telephoneNumber = transformAddress(office.data)
    .slice(7)
    .join(" ")
    .split(":")[1]
    .trim();
  const officeTelephone = createElement(
    "a",
    { href: `tel:${telephoneNumber}` },
    telephoneNumber
  );
  createElement(
    "p",
    {},
    [...transformedAddress, `${telephoneText}: ${officeTelephone}`],
    footerOfficeAddressItems
  );
  return footerRegisteredOffice;
};

const FooterColumns = (
  [about, help, policy, social, mail, office],
  footerContainer
) => {
  const footerColumns = createElement(
    "div",
    { className: ["footer-columns"] },
    null,
    footerContainer
  );
  FooterColumnsAbout(about, footerColumns);
  FooterColumnsHelp(help, footerColumns);
  FooterColumnsPolicy(policy, footerColumns);
  FooterColumnsSocail(social, footerColumns);
  FootercolumnsMail(mail, footerColumns);
  FooterColumnsOffice(office, footerColumns);
  return footerColumns;
};

const FooterBottomColumnSeller = ({ img, text }, bottomColumns) => {
  const bottomColumnsSeller = createElement(
    "div",
    {
      className: ["bottom-columns-seller"],
    },
    null,
    bottomColumns
  );
  createElement("img", { src: img }, null, bottomColumnsSeller);
  createElement("a", { href: "#" }, text, bottomColumnsSeller);
  return bottomColumnsSeller;
};
const FooterBottomColumnAdvertise = ({ img, text }, bottomColumns) => {
  const bottomColumnAdvertise = createElement(
    "div",
    {
      className: ["bottom-columns-advertise"],
    },
    null,
    bottomColumns
  );
  createElement("img", { src: img }, null, bottomColumnAdvertise);
  createElement("a", { href: "#" }, text, bottomColumnAdvertise);
  return bottomColumnAdvertise;
};
const FooterBottomColumnGift = ({ img, text }, bottomColumns) => {
  const bottomColumnGift = createElement(
    "div",
    { className: ["bottom-columns-gift"] },
    null,
    bottomColumns
  );
  createElement("img", { src: img }, null, bottomColumnGift);
  createElement("a", { href: "#" }, text, bottomColumnGift);
  return bottomColumnGift;
};
const FooterBottomColumnHelp = ({ img, text }, bottomColumns) => {
  const bottomColumnHelp = createElement(
    "div",
    { className: ["bottom-columns-help"] },
    null,
    bottomColumns
  );
  createElement("img", { src: img }, null, bottomColumnHelp);
  createElement("a", { href: "#" }, text, bottomColumnHelp);
  return bottomColumnHelp;
};
const FooterBottomColumnBrand = ({ text }, bottomColumns) => {
  const bottomColumnBrand = createElement(
    "div",
    { className: ["bottom-columns-brand"] },
    null,
    bottomColumns
  );
  createElement("span", {}, text, bottomColumnBrand);
  return bottomColumnBrand;
};
const FooterBottomColumnPayment = ({ img }, bottomColumns) => {
  const bottomColumnPayment = createElement(
    "div",
    { className: ["bottom-columns-payment"] },
    null,
    bottomColumns
  );
  createElement("img", { src: img }, null, bottomColumnPayment);
  return bottomColumnPayment;
};
const FooterBottomColumn = (
  [seller, advertise, gift, help, brand, payment],
  footerContainer
) => {
  const bottomColumns = createElement(
    "div",
    { className: ["bottom-columns"] },
    null,
    footerContainer
  );
  FooterBottomColumnSeller(seller, bottomColumns);
  FooterBottomColumnAdvertise(advertise, bottomColumns);
  FooterBottomColumnGift(gift, bottomColumns);
  FooterBottomColumnHelp(help, bottomColumns);
  FooterBottomColumnBrand(brand, bottomColumns);
  FooterBottomColumnPayment(payment, bottomColumns);
  return bottomColumns;
};
export const createFooter = ({ colunms, bottomColunms }) => {
  const footer = createElement("footer", { className: ["footer"] });
  const footerContainer = createElement(
    "div",
    { className: ["footer-container"] },
    null,
    footer
  );
  FooterColumns(colunms, footerContainer);
  FooterBottomColumn(bottomColunms, footerContainer);
  return footer;
};
