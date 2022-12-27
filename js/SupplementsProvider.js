import { getSupplements } from "../helpers/SupplementsItemsHelper.js";
import { supplementsAddToCartButtonTextKey } from "../constants/TextKeys.js";
import { AddToCartHandler } from "../js/AddToCartHandler.js";
import { SupplementsContentHandler } from "../helpers/SupplementsContentHandler.js";
import {
  SUPPLEMENTS_NEW_BOX_ELEMENT_CLASSNAME,
  SUPPLEMENTS_PRICE_DIV_CLASSNAME,
  SUPPLEMENTS_ADD_TO_CART_BUTTON_HREF,
  SUPPLEMENTS_ADD_TO_CART_BUTTON_CLASSNAME,
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
    const addToCartButton = document.createElement("a");

    //add a new div in the supplements' box-container
    boxContainer.appendChild(newBoxElement);

    //add the specific className to the new div so we can use its styles
    newBoxElement.className = SUPPLEMENTS_NEW_BOX_ELEMENT_CLASSNAME;

    //add a new child which in this case is the img element and after that we set its src to be the image path of the element we are at the moment of the map
    newBoxElement.appendChild(imageElement);
    imageElement.src = image;

    //add a new child which in this case is the h3 element and after that we set its text to be the name of the element we are at the moment of the map
    newBoxElement.appendChild(supplementNameElement);
    supplementNameElement.innerText = name;

    //add a new div for the price of the supplement and the specific className for it so we can use its styles
    newBoxElement.appendChild(priceDiv);
    priceDiv.className = SUPPLEMENTS_PRICE_DIV_CLASSNAME;

    //we use this helper function to check if we should have a div with the discount price and a span with the old price or just a div with the price of the supplement
    SupplementsContentHandler(discountPrice, priceDiv, discountElement, price);

    //add the button which is the last child of the newBoxElement and we add its text, href and className after that again - to use the styles for it
    newBoxElement.appendChild(addToCartButton);
    addToCartButton.textContent = supplementsAddToCartButtonTextKey;
    addToCartButton.href = SUPPLEMENTS_ADD_TO_CART_BUTTON_HREF;
    addToCartButton.className = SUPPLEMENTS_ADD_TO_CART_BUTTON_CLASSNAME;
  });

AddToCartHandler();
