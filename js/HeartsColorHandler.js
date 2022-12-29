const hearts = document.getElementsByClassName("fas fa-heart");
function giveLike(typePromo) {
  typePromo === "rare" && changeColor(hearts[0]);
  typePromo === "legendary" && changeColor(hearts[1]);
  typePromo === "ultra" && changeColor(hearts[2]);
}
function changeColor(typePromo) {
  const isWhiteColor = typePromo.style.color === "white";
  const isColorFalse = !typePromo.style.color;
  if (isWhiteColor || isColorFalse) {
    typePromo.style.color = "red";
    return;
  }

  typePromo.style.color = "white";
}
