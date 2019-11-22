import React from "react";
import ProductItem from "../product-item/Product-item.component";

import "./Product-item-list.styles.scss";

const ProductItemList = ({ data }) => {
  console.log(data);
  const shoppingList = data.map(el => (
    <ProductItem
      key={el.id}
      image={el.imageUrl}
      name={el.name}
      price={el.price}
    />
  ));
  return <div className="product-list">{shoppingList}</div>;
};

export default ProductItemList;
