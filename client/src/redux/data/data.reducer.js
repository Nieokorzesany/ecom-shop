import SHOP_DATA from "../../shopping-data";
import DataActionTypes from "./data.types";
import { updateQuantity } from "./data.utils";

const INITIAL_STATE = {
  SHOP_DATA,
  sortBy: "",
  page: 1
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DataActionTypes.ADJUST_QUANTITY:
      return {
        ...state,
        SHOP_DATA: updateQuantity(state.SHOP_DATA, action.payload.id)
      };
    case DataActionTypes.SELECT_SORTING:
      return {
        ...state,
        sortBy: action.payload
      };
    case DataActionTypes.SELECT_PAGE:
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
