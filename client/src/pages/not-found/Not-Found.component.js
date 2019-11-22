import React from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

import "./Not-Found.scss";

const NotFound = () => {
  return (
    <div>
      <Header />
      <img
        className="not-found"
        src="https://solutiondots.com/wp-content/uploads/2015/06/defaultTemplate.png"
        alt="page not found"
      />
      <Footer />
    </div>
  );
};

export default NotFound;
