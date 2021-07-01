import {
  FETCH_USERS,
  BLACKLIST_USER,
  REMOVE_USER,
  SUSPEND_PREMIUM,
} from "./action_types";

import API from "../services/services";

export const blacklistUser = (id, data) => (dispatch) => {
  API.update(id, data).then((response) =>
    dispatch({
      type: BLACKLIST_USER,
      payload: response.data,
    })
  );
};

export const suspendUser = (id, data) => (dispatch) => {
  API.update(id, data).then((response) =>
    dispatch({
      type: SUSPEND_PREMIUM,
      payload: response.data,
    })
  );
};

export const fetchUsers = () => (dispatch) => {
  API.getAll().then((response) =>
    dispatch({
      type: FETCH_USERS,
      payload: response.data,
    })
  );
};

export const removeUser = (id) => (dispatch) => {
  API.remove(id).then((response) =>
    dispatch({
      type: REMOVE_USER,
      payload: response.data,
    })
  );
};
