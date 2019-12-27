import React from "react";
import { connect } from "react-redux";
import { selectSorting } from "../../redux/data/data.actions";
import "./SortingPanel.styles.scss";

const SortingPanel = ({ selectSorting }) => {
  return (
    <div className="sort-section">
      <div className="sort-title">Sort</div>
      <div className="option" onClick={() => selectSorting("A-Z")}>
        Name A-Z
      </div>
      <div className="option" onClick={() => selectSorting("Z-A")}>
        Name Z-A
      </div>
      <div className="option" onClick={() => selectSorting("PriceUp")}>
        Price up
      </div>
      <div className="option" onClick={() => selectSorting("PriceDown")}>
        Price down
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  selectSorting: value => dispatch(selectSorting(value))
});

export default connect(null, mapDispatchToProps)(SortingPanel);
