import log from '../utils/log'

export const initLoginState = (
  {
    loggedInFacebook = false,
    loggedInPartout = false
  } = {}
) => ({
  type: 'INIT_LOGIN_STATE',
  loginState: {
    loggedInFacebook,
    loggedInPartout
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