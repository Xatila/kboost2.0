import { getSupplementsHelper } from "../helpers/supplementsHelper";

const supplements = getSupplementsHelper();

const SupplementsProvider = () => {
  supplements.length &&
    supplements.map((image, name, price, discountPrice) => (
      <div class="box">
        <img src={image} alt="" />
        <h3>{name}</h3>
        {discountPrice && (
          <div class="price">
            {discountPrice} <span>{price}</span>
          </div>
        )}
        {!discountPrice && <div class="price">{price}</div>}
        <a href="#box" class="btn">
          add to cart
        </a>
      </div>
    ));
};

export default SupplementsProvider;
