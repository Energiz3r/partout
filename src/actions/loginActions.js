import log from '../utils/log'

export const initLoginState = (
  {
    loggedIn = false
  } = {}
) => ({
  type: 'INIT_LOGIN_STATE',
  loginState: {
    loggedIn
  }
});
  
export const setLoginStatus = (status) => ({
  type: 'SET_LOGIN_STATUS',
  status
});