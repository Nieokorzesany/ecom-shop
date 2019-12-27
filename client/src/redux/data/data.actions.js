import DataActionTypes from "./data.types";

export const adjustQuantity = item => ({
  type: DataActionTypes.ADJUST_QUANTITY,
  payload: item
});

export const selectSorting = value => ({
  type: DataActionTypes.SELECT_SORTING,
  payload: value
});

export const selectPage = item => ({
  type: DataActionTypes.SELECT_PAGE,
  payload: item
});
