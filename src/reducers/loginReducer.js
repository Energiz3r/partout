const reducerDefaultState = []

export default (state = reducerDefaultState, action) => {
  switch (action.type) {
    case 'INIT_LOGIN_STATE':
      return action.loginState
    case 'SET_LOGIN_STATUS':
      return {
        ...state,
        loggedIn: action.status 
      }
    default:
      return state
  }
};