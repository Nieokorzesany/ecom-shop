import { combineReducers } from "redux";
import dataReducer from "./data.reducer";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
  data: dataReducer
});
