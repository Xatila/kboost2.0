const searchIconClickHandler = () => {
  const isSearchActive = document
    .getElementById("search-form")
    .classList.contains("active");

  {
    isSearchActive &&
      document.getElementById("search-form").classList.remove("active");
  }
  {
    !isSearchActive &&
      document.getElementById("search-form").classList.add("active");
  }
  document.getElementById("navbar").classList.remove("active");
  document.getElementById("cart-items").classList.remove("active");
};

const cartIconClickHandler = () => {
  const isCartActive = document
    .getElementById("cart-items")
    .classList.contains("active");

  {
    isCartActive &&
      document.getElementById("cart-items").classList.remove("active");
  }
  {
    !isCartActive &&
      document.getElementById("cart-items").classList.add("active");
  }
  document.getElementById("navbar").classList.remove("active");
  document.getElementById("search-form").classList.remove("active");
};

const menuIconClickHandler = () => {
  const isMenuActive = document
    .getElementById("navbar")
    .classList.contains("active");

  {
    isMenuActive &&
      document.getElementById("navbar").classList.remove("active");
  }
  {
    !isMenuActive && document.getElementById("navbar").classList.add("active");
  }
  document.getElementById("search-form").classList.remove("active");
  document.getElementById("cart-items").classList.remove("active");
};

const closeCartHandler = () => {
  document.getElementById("cart-items").classList.remove("active");
};

window.onscroll = () => {
  document.getElementById("navbar").classList.remove("active");
  document.getElementById("search-form").classList.remove("active");
};
