import React from "react";

import "./CartDropdownItem.styles.scss";

const CartDropdownItem = ({
  item: { imageUrl, price, name, listQuantity }
}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {listQuantity} x ${price * listQuantity}
      </span>
    </div>
  </div>
);

export default CartDropdownItem;
