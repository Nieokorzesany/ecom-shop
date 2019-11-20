import React from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <Header />
      Product
      <Link to="/">Homepage</Link>
      <Link to="/Cart">ShoppingBag</Link>
      <Footer />
    </div>
  );
};

export default Product;
