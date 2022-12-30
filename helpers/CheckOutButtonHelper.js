import { CART_CHECKOUT_BUTTON_DISABLED_CLASSNAME } from "../constants/StrongHardCodedValues.js";

export const handleCheckOutClassnamesAndAttributes = ({
  allProducts,
  checkOutButton,
}) => {
  allProducts.length &&
    checkOutButton.classList.remove(CART_CHECKOUT_BUTTON_DISABLED_CLASSNAME);
  allProducts.length && checkOutButton.removeAttribute("disabled", "");

  !allProducts.length &&
    checkOutButton.classList.add(CART_CHECKOUT_BUTTON_DISABLED_CLASSNAME);
  !allProducts.length && checkOutButton.setAttribute("disabled", "");
};
