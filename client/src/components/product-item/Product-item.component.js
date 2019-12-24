import React from "react";
import { Link } from "react-router-dom";

import "./Product-item.styles.scss";

const ProductItem = ({ price, image, name, id }) => {
  return (
    <Link to={`/Product/${id}`} className="product-card">
      <div className="product-item-img">
        <img src={image} alt="product" />
        <div className="view_details">View Details</div>
      </div>
      <div className="product-item-price">
        <span>{name}</span> <span>${price}</span>
      </div>
    </Link>
  );
};

export default ProductItem;
