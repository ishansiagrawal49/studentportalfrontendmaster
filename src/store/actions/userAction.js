export const LOCAL_USER = 'LOCAL_USER';
export const LOCAL_TOKEN = 'LOCAL_TOKEN';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

// payload = {user, tokne}
export const userLoginAction = (payload) => {
  return { type: USER_LOGIN, payload };
};

export const userLogoutAction = () => {
  return { type: USER_LOGOUT };
};
