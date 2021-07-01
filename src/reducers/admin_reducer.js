import {
  FETCH_USERS,
  BLACKLIST_USER,
  REMOVE_USER,
  SUSPEND_PREMIUM,
} from "../actions/action_types";

// import BLACKLIST_USER_ASYNC from "../sagas/saga";

const istate = {
  user: [],
};

const adminReducers = (state = istate, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    // case BLACKLIST_USER:
    //   return {
    //     ...state,
    //     user: action.payload,
    //   };
    case "BLACKLIST_USER_ASYNC":
      return state;
    case SUSPEND_PREMIUM:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducers;
