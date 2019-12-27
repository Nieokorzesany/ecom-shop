import React from "react";

import { connect } from "react-redux";
import { selectPage } from "../../redux/data/data.actions";
import "./Pagination.styles.scss";

const Pagination = ({ productCount, selectedPage, selectPage }) => {
  let pagesArr = [];
  const pagesNumber = Math.ceil(productCount / 6);
  for (let i = 0; i < pagesNumber; i++) {
    pagesArr.push(i + 1);
  }
  console.log(selectedPage, pagesArr);
  return (
    <div className="pagination-container">
      {pagesArr.map(page => (
        <a
          className={selectedPage === page ? "selected-page" : ""}
          key={page}
          onClick={() => selectPage(page)}
        >
          {page}
        </a>
      ))}
    </div>
  );
};

const mapSTateToProps = state => ({ selectedPage: state.data.page });

const mapDispatchToProps = dispatch => ({
  selectPage: item => dispatch(selectPage(item))
});

export default connect(mapSTateToProps, mapDispatchToProps)(Pagination);
