import React from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { Link } from "react-router-dom";

const ShoppingBag = () => {
  return (
    <div>
      <Header />
      koszyk
      <Link to="/">Homepage</Link>
      <Footer />
    </div>
  );
};

export default ShoppingBag;
