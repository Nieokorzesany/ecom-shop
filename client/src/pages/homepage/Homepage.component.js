import React from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Header />
      homepage
      <Link to="/Product">Product</Link>
      <Link to="/Cart">ShoppingBag</Link>
      <Footer />
    </div>
  );
};

export default Homepage;
