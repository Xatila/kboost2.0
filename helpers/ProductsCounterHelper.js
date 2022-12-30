export const getProductsCounterTextContent = ({
  allProducts,
  productsCounter,
}) => {
  if (allProducts.length < 10) {
    productsCounter.innerText = allProducts.length;
  }
  if (allProducts.length >= 10) {
    productsCounter.innerText = "9+";
  }
};
