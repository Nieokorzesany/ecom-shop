import React from "react";
import { Link } from "react-router-dom";

import "./Product-item.styles.scss";

const ProductItem = ({ price, image, name, id }) => {
  return (
    <Link to={`/Product/${id}`} className="product-card">
      <img src={image} alt="product" />
      <div>
        {name} ${price}
      </div>
    </Link>
  );
};

export default ProductItem;
