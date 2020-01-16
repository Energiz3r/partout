const reducerDefaultState = []

export default (state = reducerDefaultState, action) => {
  switch (action.type) {
    case 'INIT_UI_STATE':
      return action.UI
    case 'BLUR_APP':
      return {
        ...state,
        appIsBlurred: true
      }
    case 'UNBLUR_APP':
      return {
        ...state,
        appIsBlurred: false
      }
    default:
      return state;
  }
};