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
  cartItem.classList.remove("active");
};

const hearts = document.getElementsByClassName("fas fa-heart");
function giveLike(typePromo) {
  switch (typePromo) {
    case "rare":
      changeColor(hearts[0]);
      break;
    case "legendary":
      changeColor(hearts[1]);
      break;
    case "ultra":
      changeColor(hearts[2]);
      break;
  }
}
function changeColor(typePromo) {
  if (typePromo.style.color == "white") {
    typePromo.style.color = "red";
  } else {
    typePromo.style.color = "white";
  }
}

function promoMessage() {
  alert("OUT OF STOCKS!");
}
