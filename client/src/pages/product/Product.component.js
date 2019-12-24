import React from "react";
import ProductDetails from "../../components/product-details/Product-details.component";
import { connect } from "react-redux";

const Product = ({ data }) => {
  return <ProductDetails details={data} />;
};

function mapStateToProps({ data }, ownProps) {
  return {
    data: data.SHOP_DATA.find(
      product => product.id === Number(ownProps.match.params.id)
    )
  };
}

export default connect(mapStateToProps)(Product);
