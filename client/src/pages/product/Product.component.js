import React from "react";
import { Link } from "react-router-dom";

const Product = props => {
  console.log(props);
  return (
    <div>
      Product {props.match.params.id}
      <Link to="/">Homepage</Link>
      <Link to="/Cart">ShoppingBag</Link>
    </div>
  );
};

export default Product;
