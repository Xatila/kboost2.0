export const AddToCartHandler = () => {
  let allProducts = [];
  const checkOutButton = document.getElementById("checkOut");

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
      //GetPrice
      const priceAsText = btn.previousElementSibling.textContent;
      let price = "";
      for (let i = 1; i < 6; i++) {
        price += priceAsText[i];
      }

      //GetName
      const name =
        btn.previousElementSibling.previousElementSibling.textContent;
      alert(`${name} has been aded to your cart!`);

      //GetPictureUrl
      const picture =
        btn.previousElementSibling.previousElementSibling
          .previousElementSibling;
      let pictureUrl = picture.src;

      //CreateProduct
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

      //SetProductData
      itemName.textContent = name;
      itemImg.src = pictureUrl;
      itemPrice.textContent = `$${price}`;
      cartItem.insertBefore(itemToAdd, cartItem.children[0]);
      if (document.getElementById("emptyCart")) {
        document.getElementById("emptyCart").remove();
      }

      //FillObject
      currentProduct["name"] = name;
      currentProduct["price"] = price;
      currentProduct["imgUrl"] = pictureUrl;
      allProducts.push(currentProduct);
      console.log(allProducts);
    });
  });
};
