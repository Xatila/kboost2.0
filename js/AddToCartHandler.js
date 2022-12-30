import {
  CART_CHECKOUT_BUTTON_DISABLED_CLASSNAME,
  CART_DELETE_BUTTON_CLASSNAME,
  CART_EMPTY_CART_CLASSNAME_HIDDEN,
  CART_ITEMS_COUNTER_CLASSNAME,
  CART_ITEM_PRICE_CLASSNAME,
} from "../constants/StrongHardCodedValues.js";
import {
  cartCheckoutButtonTextKey,
  cartItemDeleteButtonTextKey,
} from "../constants/TextKeys.js";

export const AddToCartHandler = () => {
  let allProducts = [];
  const checkOutButton = document.getElementById("checkOut");
  const cartIcon = document.getElementById("cart-btn");
  const productsCounter = document.createElement("div");
  cartIcon.appendChild(productsCounter);
  productsCounter.className = CART_ITEMS_COUNTER_CLASSNAME;

  productsCounter.innerText = allProducts.length;

  !allProducts.length &&
    checkOutButton.classList.add(CART_CHECKOUT_BUTTON_DISABLED_CLASSNAME);
  !allProducts.length && checkOutButton.setAttribute("disabled", "");

  const getTotalPrice = () => {
    let price = 0;
    for (const product of allProducts) {
      for (const key in product) {
        let currentPrice = product.price;
        price += Number(currentPrice.slice(1, currentPrice.length));
        break;
      }
    }
    checkOutButton.textContent = `BUY: $${price.toFixed(2)}`;
  };
  let buttons = document.querySelectorAll(".box .btn");

  checkOutButton && checkOutButton.addEventListener("click", getTotalPrice);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.previousSibling.previousSibling.textContent;
      const img = btn.previousSibling.previousSibling.previousSibling.src;
      const price = btn.previousSibling.firstChild.textContent;
      const id = Math.random() * Math.random();

      allProducts.push({ name: name, img: img, price: price, id: id });

      const showNotification = notifier.show(
        "✅ Cart update",
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

      itemToAdd.setAttribute("id", id);
      itemToAdd.classList.add("cart-item");

      const deleteButton = document.createElement("span");
      const itemImg = document.createElement("img");
      const divContent = document.createElement("div");
      divContent.classList.add("content");

      const itemName = document.createElement("h3");
      const itemPrice = document.createElement("div");
      itemPrice.classList.add(CART_ITEM_PRICE_CLASSNAME);

      itemToAdd.appendChild(deleteButton);
      deleteButton.innerText = cartItemDeleteButtonTextKey;
      deleteButton.className = CART_DELETE_BUTTON_CLASSNAME;

      cartItemsParent.appendChild(itemToAdd);
      itemToAdd.appendChild(itemImg);
      itemToAdd.appendChild(divContent);

      divContent.appendChild(itemName);
      divContent.appendChild(itemPrice);

      if (allProducts.length < 10) {
        productsCounter.innerText = allProducts.length;
      }
      if (allProducts.length >= 10) {
        productsCounter.innerText = "9+";
      }
      itemName.textContent = name;
      itemImg.src = img;
      itemPrice.textContent = price;

      cartItemsParent &&
        cartItemsParent.insertBefore(itemToAdd, cartItemsParent.children[0]);

      deleteButton.addEventListener("click", () => {
        allProducts = allProducts.filter((item) => item.id !== id);
        checkOutButton.textContent = cartCheckoutButtonTextKey;
        if (allProducts.length < 10) {
          productsCounter.innerText = allProducts.length;
        }
        if (allProducts.length >= 10) {
          productsCounter.innerText = "9+";
        }
        document.getElementById(id).remove();
        !allProducts.length && checkOutButton.classList.add("disabled");
        !allProducts.length && checkOutButton.setAttribute("disabled", "");
        !allProducts.length &&
          document
            .getElementById("emptyCartTitle")
            .classList.remove(CART_EMPTY_CART_CLASSNAME_HIDDEN);
      });

      allProducts.length &&
        checkOutButton.classList.remove(
          CART_CHECKOUT_BUTTON_DISABLED_CLASSNAME
        );
      allProducts.length && checkOutButton.removeAttribute("disabled", "");
    });
  });
};
