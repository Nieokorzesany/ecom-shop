import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/CustomButton.component";
import CartDropdownItem from "../cart-dropdown-item/CartDropdownItem";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartDropdownItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
