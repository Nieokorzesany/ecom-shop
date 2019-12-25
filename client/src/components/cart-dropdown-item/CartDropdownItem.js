import React from "react";

import { connect } from "react-redux";
import "./CartDropdownItem.styles.scss";

const CartDropdownItem = ({ data, id }) => {
  return <p>{}</p>;
};

const mapStateToProps = ({ data }) => ({
  data: data.SHOP_DATA
});

export default connect(mapStateToProps)(CartDropdownItem);
