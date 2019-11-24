import React from "react";
import ProductItem from "../product-item/Product-item.component";
import { connect } from "react-redux";

import "./Product-item-list.styles.scss";

const ProductItemList = ({ data }) => {
  const shoppingList = data.map(el => (
    <ProductItem
      key={el.id}
      id={el.id}
      image={el.imageUrl}
      name={el.name}
      price={el.price}
    />
  ));
  return <div className="product-list">{shoppingList}</div>;
};

function mapStateToProps({ data }) {
  return {
    data: data.SHOP_DATA
  };
}

export default connect(mapStateToProps)(ProductItemList);
