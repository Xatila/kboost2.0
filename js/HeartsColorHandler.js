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
