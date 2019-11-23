import React from "react";

const Product = props => {
  console.log(props);
  return <div>Product {props.match.params.id}</div>;
};

export default Product;
