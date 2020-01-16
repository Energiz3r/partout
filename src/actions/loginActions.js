export const initLoginState = (
  {
    loggedInFacebook = false,
    loggedInPartout = false,
    loggedIn = false
  } = {}
) => ({
  type: 'INIT_LOGIN_STATE',
  loginState: {
    loggedInFacebook,
    loggedInPartout,
    loggedIn
  }
})
  
export const setLoginStatusFacebook = (status) => ({
  type: 'SET_LOGIN_STATUS_FACEBOOK',
  status
})

export const setLoginStatusPartout = (status) => ({
  type: 'SET_LOGIN_STATUS_PARTOUT',
  status
})
export const setLoginStatus = (status) => ({
  type: 'SET_LOGIN_STATUS',
  status
})