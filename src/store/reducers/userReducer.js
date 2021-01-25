import { LOCAL_TOKEN, LOCAL_USER, USER_LOGIN, USER_LOGOUT } from '../actions/userAction';

// Retrive user and token from locat storage
const localUser = JSON.parse(localStorage.getItem(LOCAL_USER)) || null;
const localToken = JSON.parse(localStorage.getItem(LOCAL_TOKEN)) || null;

const initialState = {
  user: localUser,
  token: localToken,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      localStorage.setItem(LOCAL_USER, JSON.stringify(action.payload.user));
      localStorage.setItem(LOCAL_TOKEN, JSON.stringify(action.payload.token));
      return { ...state, user: action.payload.user, token: action.payload.token };
    }
    case USER_LOGOUT: {
      localStorage.removeItem(LOCAL_USER);
      localStorage.removeItem(LOCAL_TOKEN);
      return { ...state, user: null, token: null };
    }
    default:
      return state;
  }
};

export default userReducer;
