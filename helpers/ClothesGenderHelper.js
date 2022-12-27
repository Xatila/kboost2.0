export const getGender = (
  image,
  menBoxContainer,
  womenBoxContainer,
  newBoxElement
) => {
  const isMan = image.charAt(7) === "m";

  isMan && menBoxContainer.appendChild(newBoxElement);
  isMan && newBoxElement.setAttribute("id", "men");

  !isMan && womenBoxContainer.appendChild(newBoxElement);
  !isMan && newBoxElement.setAttribute("id", "women");
};
