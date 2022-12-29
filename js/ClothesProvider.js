import { getClothes } from "../helpers/ClothesItemsHelper.js";
import { AddToCartHandler } from "../js/AddToCartHandler.js";
import { getGender } from "../helpers/ClothesGenderHelper.js";
import { clothesAddToCartButtonTextKey } from "../constants/TextKeys.js";
import { ClothesContentHandler } from "../js/ClothesContentHandler.js";
import {
  NEW_BOX_ELEMENT_CLASSNAME,
  ADD_TO_CART_BUTTON_CLASSNAME,
  PRICE_DIV_CLASSNAME,
} from "./../constants/StrongHardCodedValues.js";

const clothes = getClothes();
const menBoxContainer = document.querySelector("#menClothes");
const womenBoxContainer = document.querySelector("#womenClothes");
clothes.length &&
  clothes.map(({ image, name, price, discountPrice }) => {
    const newBoxElement = document.createElement("div");
    const imageElement = document.createElement("img");
    const supplementNameElement = document.createElement("h3");
    const priceDiv = document.createElement("div");
    const discountElement = document.createElement("span");
    const addToCartButton = document.createElement("button");

    getGender(image, menBoxContainer, womenBoxContainer, newBoxElement);
    newBoxElement.className = NEW_BOX_ELEMENT_CLASSNAME;

    newBoxElement.appendChild(imageElement);
    imageElement.src = image;

    newBoxElement.appendChild(supplementNameElement);
    supplementNameElement.innerText = name;

    newBoxElement.appendChild(priceDiv);
    priceDiv.className = PRICE_DIV_CLASSNAME;

    ClothesContentHandler(discountPrice, priceDiv, discountElement, price);

    newBoxElement.appendChild(addToCartButton);

    addToCartButton.textContent = clothesAddToCartButtonTextKey;
    addToCartButton.className = ADD_TO_CART_BUTTON_CLASSNAME;
  });

AddToCartHandler();
