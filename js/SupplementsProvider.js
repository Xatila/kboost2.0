import { getSupplements } from "../helpers/SupplementsItemsHelper.js";
import { supplementsAddToCartButtonTextKey } from "../constants/TextKeys.js";
import { AddToCartHandler } from "../js/AddToCartHandler.js";
import { SupplementsContentHandler } from "../helpers/SupplementsContentHandler.js";
import {
  NEW_BOX_ELEMENT_CLASSNAME,
  PRICE_DIV_CLASSNAME,
  ADD_TO_CART_BUTTON_CLASSNAME,
} from "./../constants/StrongHardCodedValues.js";

const supplements = getSupplements();

supplements.length &&
  supplements.map(({ image, name, price, discountPrice }) => {
    const boxContainer = document.querySelector("#supplementsItems");
    const newBoxElement = document.createElement("div");
    const imageElement = document.createElement("img");
    const supplementNameElement = document.createElement("h3");
    const priceDiv = document.createElement("div");
    const discountElement = document.createElement("span");
    const addToCartButton = document.createElement("button");

    boxContainer.appendChild(newBoxElement);

    newBoxElement.className = NEW_BOX_ELEMENT_CLASSNAME;

    newBoxElement.appendChild(imageElement);
    imageElement.src = image;

    newBoxElement.appendChild(supplementNameElement);
    supplementNameElement.innerText = name;

    newBoxElement.appendChild(priceDiv);
    priceDiv.className = PRICE_DIV_CLASSNAME;

    SupplementsContentHandler(discountPrice, priceDiv, discountElement, price);

    newBoxElement.appendChild(addToCartButton);

    addToCartButton.textContent = supplementsAddToCartButtonTextKey;
    addToCartButton.className = ADD_TO_CART_BUTTON_CLASSNAME;
  });

AddToCartHandler();
