import {
  CREATE_USER,
  FETCH_USERS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
} from './types';

export function createUser(user) {
  return {
    type: CREATE_USER,
    payload: user,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function fetchUsers() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch('http://77.120.241.80:8811/api/users');
      const json = await response.json();
      dispatch({ type: FETCH_USERS, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showAlert('Что то пошло не так'));
    }
  };
}
