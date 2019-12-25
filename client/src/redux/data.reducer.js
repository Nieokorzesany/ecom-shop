import SHOP_DATA from "../shopping-data.js";
import CartActionTypes from "./cart/cart.types";
import { updateQuantity } from "./data.utils";

const INITIAL_STATE = {
  SHOP_DATA
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        SHOP_DATA: updateQuantity(state.SHOP_DATA, action.payload.id)
      };
    default:
      return state;
  }
};

export default dataReducer;
