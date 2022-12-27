let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

const hearts = document.getElementsByClassName("fas fa-heart");
function giveLike(typePromo) {
  typePromo === "rare" && changeColor(hearts[0]);
  typePromo === "legendary" && changeColor(hearts[1]);
  typePromo === "ultra" && changeColor(hearts[2]);
  console.log(typePromo);
}
function changeColor(typePromo) {
  const isWhiteColor = typePromo.style.color === "white";
  if (isWhiteColor) {
    typePromo.style.color = "red";
  }
  if (!isWhiteColor) {
    typePromo.style.color = "white";
  }
}

function promoMessage() {
  alert("OUT OF STOCKS!");
}
