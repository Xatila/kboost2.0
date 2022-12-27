import { getClothes } from "../helpers/ClothesItemsHelper.js";
import { AddToCartHandler } from "../js/AddToCartHandler.js";
import { getGender } from "../helpers/ClothesGenderHelper.js";
import { clothesAddToCartButtonTextKey } from "../constants/TextKeys.js";
import { ClothesContentHandler } from "../js/ClothesContentHandler.js";
import {
  CLOTHES_NEW_BOX_ELEMENT_CLASSNAME,
  CLOTHES_PRICE_DIV_CLASSNAME,
  CLOTHES_ADD_TO_CART_BUTTON_HREF,
  CLOTHES_ADD_TO_CART_BUTTON_CLASSNAME,
  CLOTHES_DIV_NAME_AND_PRICE_CLASSNAME,
  CLOTHES_DIV_IMAGE_CLASSNAME,
} from "./../constants/StrongHardCodedValues.js";

const clothes = getClothes();
const menBoxContainer = document.querySelector("#menClothes");
const womenBoxContainer = document.querySelector("#womenClothes");
clothes.length &&
  clothes.map(({ image, name, price, discountPrice }) => {
    const newBoxElement = document.createElement("div");
    const imageDiv = document.createElement("div");
    const imageElement = document.createElement("img");
    const nameAndPriceDiv = document.createElement("div");
    const clothesNameElement = document.createElement("h3");
    const priceDiv = document.createElement("div");
    const discountElement = document.createElement("span");
    const addToCartButton = document.createElement("a");

    //     <div id="man" class="box">
    //     <div class="image">
    //         <img src="images/men_clothes/top1.png" alt="">
    //     </div>
    //     <div class="content">
    //         <h3>black top</h3>
    //         <div class="price">$13.99</div>
    //     </div>
    // </div>

    getGender(image, menBoxContainer, womenBoxContainer, newBoxElement);
    newBoxElement.className = CLOTHES_NEW_BOX_ELEMENT_CLASSNAME;
    newBoxElement.appendChild(imageDiv);
    imageDiv.className = CLOTHES_DIV_IMAGE_CLASSNAME;
    imageDiv.appendChild(imageElement);
    imageElement.src = image;
    newBoxElement.appendChild(nameAndPriceDiv);
    nameAndPriceDiv.className = CLOTHES_DIV_NAME_AND_PRICE_CLASSNAME;
    nameAndPriceDiv.appendChild(clothesNameElement);
    clothesNameElement.innerText = name;
    nameAndPriceDiv.appendChild(priceDiv);
    priceDiv.className = CLOTHES_PRICE_DIV_CLASSNAME;
    ClothesContentHandler(discountPrice, priceDiv, discountElement, price);
    newBoxElement.appendChild(addToCartButton);
    addToCartButton.textContent = clothesAddToCartButtonTextKey;
    addToCartButton.href = CLOTHES_ADD_TO_CART_BUTTON_HREF;
    addToCartButton.className = CLOTHES_ADD_TO_CART_BUTTON_CLASSNAME;
  });

AddToCartHandler();
