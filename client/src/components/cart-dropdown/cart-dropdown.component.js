import React from "react";
import CustomButton from "../custom-button/CustomButton.component";
import CartDropdownItem from "../cart-dropdown-item/CartDropdownItem";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartList }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartList.length > 0
          ? cartList.map((item, index) => (
              <CartDropdownItem key={index} id={item} />
            ))
          : null}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartList: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
