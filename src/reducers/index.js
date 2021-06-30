import { combineReducers } from "redux";
import adminReducers from "./admin_reducer";

export default combineReducers({
  users: adminReducers,
});
