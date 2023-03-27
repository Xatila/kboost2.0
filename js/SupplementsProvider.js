import { getSupplements } from "../helpers/SupplementsItemsHelper.js";
import { supplementsAddToCartButtonTextKey } from "../constants/TextKeys.js";
import { AddToCartHandler } from "../js/AddToCartHandler.js";
import { SupplementsContentHandler } from "../helpers/SupplementsContentHandler.js";
import {
  NEW_BOX_ELEMENT_CLASSNAME,
  PRICE_DIV_CLASSNAME,
  ADD_TO_CART_BUTTON_CLASSNAME,
  ADD_TO_CART_BUTTON_CLASSNAME_2,
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
    addToCartButton.classList.add = ADD_TO_CART_BUTTON_CLASSNAME_2;
  });
AddToCartHandler();

const allBoxes = document.querySelectorAll(".box img");
let modal = document.getElementById("myModal");
let modalContent = document.querySelector(".modal-content");
let span = document.getElementsByClassName("close")[0];
const imageModal = document.createElement("img");
const supplementNameElement = document.createElement("h3");
allBoxes.forEach((img) => {
  img.addEventListener("click", () => {
    imageModal.src=img.src;
    imageModal.style="float:left; width: fit-content; height: 120px; padding: 5px;";
    modalContent.insertBefore(imageModal, modalContent.firstChild);
    supplementNameElement.textContent=img.nextSibling.textContent
    modalContent.appendChild(supplementNameElement, span);
    modal.style.display = "block";
    
  });
});
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
span.onclick = function() {
  modal.style.display = "none";
}
//TODO FIX IMG POSITIONING ON MODAL;