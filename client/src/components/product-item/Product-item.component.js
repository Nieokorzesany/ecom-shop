import React from "react";

import "./Product-item.styles.scss";

const ProductItem = ({ price, image, name }) => {
  return (
    <div className="product-card">
      <img src={image} alt="product" />
      <div>
        {name} ${price}
      </div>
    </div>
  );
};

export default ProductItem;
