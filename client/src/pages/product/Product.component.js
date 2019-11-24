import React from "react";
import ProductDetails from "../../components/product-details/Product-details.component";

const Product = props => {
  console.log(props);
  return <ProductDetails> {props.match.params.id}</ProductDetails>;
};

export default Product;
