export const AddToCartHandler = () => {
  let allProducts = [];
  const checkOutButton = document.getElementById("checkOut");
  const cartIcon = document.getElementById("cart-btn");
  const productsCounter = document.createElement("div");
  cartIcon.appendChild(productsCounter);
  productsCounter.className = "cart-items-counter";

  productsCounter.innerText = allProducts.length;

  !allProducts.length && checkOutButton.classList.add("disabled");
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

  //Add EventListeners
  checkOutButton && checkOutButton.addEventListener("click", getTotalPrice);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.previousSibling.previousSibling.textContent;
      const img = btn.previousSibling.previousSibling.previousSibling.src;
      const price = btn.previousSibling.firstChild.textContent;
      const id = Math.random() * Math.random();
      allProducts.push({ name: name, img: img, price: price, id: id });
      document
        .getElementById("emptyCartTitle")
        .classList.add("hiddenEmptyCart");
      checkOutButton.textContent = "Check Out";
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
      itemPrice.classList.add("price");
      itemToAdd.appendChild(deleteButton);
      deleteButton.innerText = "X";
      deleteButton.className = "delete-btn";
      cartItemsParent.appendChild(itemToAdd);
      itemToAdd.appendChild(itemImg);
      itemToAdd.appendChild(divContent);
      divContent.appendChild(itemName);
      divContent.appendChild(itemPrice);
      productsCounter.innerText = allProducts.length;
      itemName.textContent = name;
      itemImg.src = img;
      itemPrice.textContent = price;
      cartItemsParent &&
        cartItemsParent.insertBefore(itemToAdd, cartItemsParent.children[0]);
      deleteButton.addEventListener("click", () => {
        allProducts = allProducts.filter((item) => item.id !== id);
        checkOutButton.textContent = "Check Out";
        productsCounter.innerText = allProducts.length;
        document.getElementById(id).remove();
        !allProducts.length && checkOutButton.classList.add("disabled");
        !allProducts.length && checkOutButton.setAttribute("disabled", "");
        !allProducts.length &&
          document
            .getElementById("emptyCartTitle")
            .classList.remove("hiddenEmptyCart");
      });

      allProducts.length && checkOutButton.classList.remove("disabled");
      allProducts.length && checkOutButton.removeAttribute("disabled", "");
    });
  });
};
