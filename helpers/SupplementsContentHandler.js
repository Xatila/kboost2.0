//helper function for our conditions so we don't add extra lines in our SupplementsProvider - we write the logic here and call the function after that
//for less code there

//we need to call it with the following attributes to make the checks - discountPrice, priceDiv, discountElement and price
export const SupplementsContentHandler = (
  discountPrice,
  priceDiv,
  discountElement,
  price
) => {
  //we want to add a div with text which is going to be the new, discounted price and a span - with the old price of the supplement if discountPrice is true
  if (discountPrice) {
    priceDiv.innerText = discountPrice;
    priceDiv.appendChild(discountElement);
    discountElement.innerText = price;
  }

  //we want to add only a text which is the price of the supplement if the discountPrice is false
  if (!discountPrice) {
    priceDiv.innerText = price;
  }

  //and no - I didn't forgot that if else exists - it's just a bad practice
  //if else is bad practice, nested if's is a BIG bad practice
  //I'd use the and operator(&&) if possible tho - I recommend you to use it whenever is possible and avoid ifs.
};
