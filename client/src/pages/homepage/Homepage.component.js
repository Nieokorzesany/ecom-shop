import React from "react";

import ProductItemList from "../../components/product-item-list/Product-item-list";
import SortingPanel from "../../components/sorting-panel/SortingPanel";

import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div>
      <div className="homepage-content">
        <SortingPanel />

        <ProductItemList className="product-list-container" />
      </div>
    </div>
  );
};

export default Homepage;
