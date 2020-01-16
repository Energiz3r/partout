//the default/initial state
export const initUIState = (
  {
    appIsBlurred = false
  } = {}
) => ({
  type: 'INIT_UI_STATE',
  UI: {
    appIsBlurred
  }
})

