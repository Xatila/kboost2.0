export const AddToCartHandler = () => {
  let allProducts = [];
  const checkOutButton = document.getElementById("checkOut");

  !allProducts && checkOutButton.setAttribute("disabled", "");
  const getTotalPrice = () => {
    let price = 0;
    for (const product of allProducts) {
      for (const key in product) {
        let currentPrice = product["price"];
        price += Number(currentPrice);
        break;
      }
    }
    checkOutButton.textContent = `BUY: $${price.toFixed(2)}`;
  };
  let buttons = document.querySelectorAll(".box .btn");

  //Add EventListeners
  checkOutButton.addEventListener("click", getTotalPrice);
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      checkOutButton.textContent = "Check Out";
      let currentProduct = {};
      //Get Price
      const priceAsText = btn.previousElementSibling.textContent;
      let price = "";
      for (let i = 1; i < 6; i++) {
        price += priceAsText[i];
      }

      //GetName
      const name =
        btn.previousElementSibling.previousElementSibling.textContent;
      alert(`${name} has been aded to your cart!`);

      //Get Picture Path
      const picture =
        btn.previousElementSibling.previousElementSibling
          .previousElementSibling;
      let picturePath = picture.src;

      //Create Product
      const itemToAdd = document.createElement("div");
      itemToAdd.classList.add("cart-item");
      const deleteButton = document.createElement("span");
      const itemImg = document.createElement("img");
      const divContent = document.createElement("div");
      divContent.classList.add("content");
      const itemName = document.createElement("h3");
      const itemPrice = document.createElement("div");
      itemPrice.classList.add("price");
      itemToAdd.appendChild(deleteButton);
      itemToAdd.appendChild(itemImg);
      itemToAdd.appendChild(divContent);
      divContent.appendChild(itemName);
      divContent.appendChild(itemPrice);

      //Set Product Data
      itemName.textContent = name;
      itemImg.src = picturePath;
      itemPrice.textContent = `$${price}`;
      cartItem.insertBefore(itemToAdd, cartItem.children[0]);
      if (document.getElementById("emptyCart")) {
        document.getElementById("emptyCart").remove();
      }

      //Fill Object
      currentProduct["name"] = name;
      currentProduct["price"] = price;
      currentProduct["imgUrl"] = picturePath;
      allProducts.push(currentProduct);
      console.log(allProducts);
    });
  });
};
