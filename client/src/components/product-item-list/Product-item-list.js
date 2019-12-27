import React from "react";
import ProductItem from "../product-item/Product-item.component";
import { connect } from "react-redux";
import { sortBy } from "../../redux/data/data.utils";
import Pagination from "../Pagination/Pagination";

import "./Product-item-list.styles.scss";

const ProductItemList = ({ sorted, page }) => {
  const min = (page - 1) * 6;
  const max = page * 6;
  const shoppingList = sorted.map((el, i) =>
    i + 1 > min && i + 1 <= max ? (
      <ProductItem
        key={el.id}
        id={el.id}
        image={el.imageUrl}
        name={el.name}
        price={el.price}
      />
    ) : null
  );
  return (
    <div>
      <div className="product-list">{shoppingList}</div>
      <Pagination productCount={sorted.length} />
    </div>
  );
};

function mapStateToProps({ data }) {
  return {
    data: data.SHOP_DATA,
    sorted: sortBy(data.sortBy, data.SHOP_DATA.slice(0)),
    page: data.page
  };
}

export default connect(mapStateToProps)(ProductItemList);
