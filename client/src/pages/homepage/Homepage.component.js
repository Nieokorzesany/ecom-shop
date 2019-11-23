import React from "react";
import SHOP_DATA from "../../shopping-data";
import ProductItemList from "../../components/product-item-list/Product-item-list";

import "./homepage.styles.scss";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [...SHOP_DATA] };
  }
  render() {
    return (
      <div>
        <div className="homepage-content">
          <div className="sort-menu">sort</div>
          <ProductItemList
            className="product-list-container"
            data={this.state.data}
          />
        </div>
      </div>
    );
  }
}

export default Homepage;
