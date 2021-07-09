import { CREATE_USER, FETCH_USERS } from './types';

const initialState = {
  users: [],
  fetchedUsers: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, users: state.users.concat([action.payload]) };
    case FETCH_USERS:
      return { ...state, fetchedUsers: action.payload };
    default:
      return state;
  }
};
