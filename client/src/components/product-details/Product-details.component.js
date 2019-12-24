import React from "react";

import CustomButton from "../custom-button/CustomButton.component";
import "./Product-details.scss";

const ProductDetails = ({ details }) => {
  return (
    <div className="product-details">
      <div className="product-details-img">
        <img src={details.imageUrl} alt={details.name} />
      </div>
      <div className="details">
        <h1 className="product-details-title">{details.name}</h1>
        <h2 className="product-details-price">Price: $ {details.price}</h2>
        <h3>Quantity: {details.quantity}</h3>
        <div className="product-details-description">{details.description}</div>
        <CustomButton>Add to Cart</CustomButton>
      </div>
    </div>
  );
};

export default ProductDetails;
