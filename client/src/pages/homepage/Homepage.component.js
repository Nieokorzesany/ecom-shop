import React from "react";

import ProductItemList from "../../components/product-item-list/Product-item-list";

import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div>
      <div className="homepage-content">
        <div className="sort-menu">sort</div>
        <ProductItemList className="product-list-container" />
      </div>
    </div>
  );
};

export default Homepage;
