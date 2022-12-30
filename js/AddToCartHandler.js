import {
  CART_DELETE_BUTTON_CLASSNAME,
  CART_EMPTY_CART_CLASSNAME_HIDDEN,
  CART_ITEMS_COUNTER_CLASSNAME,
  CART_ITEM_PRICE_CLASSNAME,
} from "../constants/StrongHardCodedValues.js";
import {
  cartCheckoutButtonTextKey,
  cartItemDeleteButtonTextKey,
} from "../constants/TextKeys.js";
import { handleCheckOutClassnamesAndAttributes } from "../helpers/CheckOutButtonHelper.js";
import { getProductsCounterTextContent } from "../helpers/ProductsCounterHelper.js";

export const AddToCartHandler = () => {
  let allProducts = [];
  const checkOutButton = document.getElementById("checkOut");
  const cartIcon = document.getElementById("cart-btn");
  const productsCounter = document.createElement("div");
  cartIcon.appendChild(productsCounter);
  productsCounter.className = CART_ITEMS_COUNTER_CLASSNAME;

  productsCounter.innerText = allProducts.length;

  handleCheckOutClassnamesAndAttributes({ allProducts, checkOutButton });

  const getTotalPrice = () => {
    let price = 0;
    allProducts.map(
      (item) => (price += Number(item.price.slice(1, 6)) * item.quantity)
    );
    checkOutButton.textContent = `TOTAL: $${price.toFixed(2)}`;
  };

  let buttons = document.querySelectorAll(".box .btn");

  checkOutButton && checkOutButton.addEventListener("click", getTotalPrice);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.previousSibling.previousSibling.textContent;
      const img = btn.previousSibling.previousSibling.previousSibling.src;
      let price = btn.previousSibling.firstChild.textContent;
      const id = Math.random() * Math.random();
      let quantity = 1;

      allProducts.find((item) => item.name === name && quantity++);

      const showNotification = notifier.show(
        "✅ new product",
        `${name} added to your cart!`,
        "success",
        "",
        "",
        0
      );

      setTimeout(() => notifier.hide(showNotification), 2500);

      document
        .getElementById("emptyCartTitle")
        .classList.add(CART_EMPTY_CART_CLASSNAME_HIDDEN);

      checkOutButton.textContent = cartCheckoutButtonTextKey;

      const cartItemsParent = document.querySelector(".cart-items-container");
      const itemToAdd = document.createElement("div");
      const deleteButton = document.createElement("span");
      const itemImg = document.createElement("img");
      const divContent = document.createElement("div");
      const itemName = document.createElement("h3");
      const itemPrice = document.createElement("div");

      if (quantity === 1) {
        allProducts.push({
          name: name,
          img: img,
          price: price,
          id: id,
          quantity: quantity,
        });
        itemToAdd.setAttribute("id", id);
        itemToAdd.classList.add("cart-item");

        divContent.classList.add("content");

        itemName.textContent = name;
        itemName.setAttribute("id", `${id}h3`);

        itemPrice.classList.add(CART_ITEM_PRICE_CLASSNAME);
        itemPrice.textContent = price;
        itemPrice.setAttribute("id", `${id}price`);

        itemToAdd.appendChild(deleteButton);
        deleteButton.innerText = cartItemDeleteButtonTextKey;
        deleteButton.className = CART_DELETE_BUTTON_CLASSNAME;

        cartItemsParent.appendChild(itemToAdd);
        itemToAdd.appendChild(itemImg);
        itemImg.src = img;
        itemToAdd.appendChild(divContent);

        divContent.appendChild(itemName);
        divContent.appendChild(itemPrice);

        getProductsCounterTextContent({ allProducts, productsCounter });

        cartItemsParent &&
          cartItemsParent.insertBefore(itemToAdd, cartItemsParent.children[0]);

        deleteButton.addEventListener("click", () => {
          allProducts = allProducts.filter((item) => item.id !== id);
          checkOutButton.textContent = cartCheckoutButtonTextKey;
          getProductsCounterTextContent({ allProducts, productsCounter });
          document.getElementById(id).remove();
          handleCheckOutClassnamesAndAttributes({
            allProducts,
            checkOutButton,
          });
          !allProducts.length &&
            document
              .getElementById("emptyCartTitle")
              .classList.remove(CART_EMPTY_CART_CLASSNAME_HIDDEN);
        });
      }

      if (quantity > 1) {
        let existingItemId;
        allProducts.map((item) => {
          if (item.name === name) {
            existingItemId = item.id;
            item.quantity++;
            quantity = item.quantity;
          }
        });

        const existingItemName = document.getElementById(`${existingItemId}h3`);
        existingItemName.textContent = `${name} x${quantity}`;

        const existingItemPrice = document.getElementById(
          `${existingItemId}price`
        );
        const newPrice = (price.slice(1, 6) * quantity).toFixed(2);
        price = newPrice;
        existingItemPrice.textContent = `$${newPrice}`;
      }

      handleCheckOutClassnamesAndAttributes({ allProducts, checkOutButton });
    });
  });
};
