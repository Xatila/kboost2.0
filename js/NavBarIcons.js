let navbar = document.querySelector(".navbar");
let searchForm = document.querySelector(".search-form");
let cartItem = document.querySelector(".cart-items-container");

const searchIconClickHandler = () => {
  document.getElementById("search-form").classList.add("active");
  document.getElementById("navbar").classList.remove("active");
  document.getElementById("cart-items").classList.remove("active");
};

const cartIconClickHandler = () => {
  document.getElementById("cart-items").classList.add("active");
  document.getElementById("navbar").classList.remove("active");
  document.getElementById("search-form").classList.remove("active");
};

window.onscroll = () => {
  document.getElementById("navbar").classList.remove("active");
  document.getElementById("search-form").classList.remove("active");
};
