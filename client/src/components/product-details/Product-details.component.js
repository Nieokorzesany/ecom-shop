import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/CustomButton.component";
import "./Product-details.scss";

const ProductDetails = ({ details, addItem, data }) => {
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
        <CustomButton
          onClick={() => addItem(details)}
          disabled={
            data.find(item => item.id === details.id).quantity > 0
              ? false
              : true
          }
        >
          Add to Cart
        </CustomButton>
      </div>
    </div>
  );
};
const mapStateToProps = ({ data }) => ({
  data: data.SHOP_DATA
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
