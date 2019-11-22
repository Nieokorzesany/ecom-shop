import React from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { Link } from "react-router-dom";

const Product = props => {
  console.log(props);
  return (
    <div>
      <Header />
      Product {props.match.params.id}
      <Link to="/">Homepage</Link>
      <Link to="/Cart">ShoppingBag</Link>
      <Footer />
    </div>
  );
};

export default Product;
