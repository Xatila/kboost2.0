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
function pushAlert() {
  alert("Product has been aded to your cart!");
}
const hearts = document.getElementsByClassName("fas fa-heart");

function likeRare() {
  if(hearts[0].style.color == 'white'){
   hearts[0].style.color = 'red';
  }else{
    hearts[0].style.color = 'white';
  }
}
function likeLegendary() {
  if(hearts[1].style.color == 'white'){
   hearts[1].style.color = 'red';
  }else{
    hearts[1].style.color = 'white';
  }
}
function likeUltra() {
  if(hearts[2].style.color == 'white'){
   hearts[2].style.color = 'red';
  }else{
    hearts[2].style.color = 'white';
  }
}
