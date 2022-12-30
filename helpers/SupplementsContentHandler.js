export const SupplementsContentHandler = (
  discountPrice,
  priceDiv,
  discountElement,
  price
) => {
  if (discountPrice) {
    priceDiv.innerText = discountPrice;
    priceDiv.appendChild(discountElement);
    discountElement.innerText = price;
  }

  if (!discountPrice) {
    priceDiv.innerText = price;
  }
};
