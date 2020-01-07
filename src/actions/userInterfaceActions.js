//NOTE - breakpoints are also defined in ./styles/base/settings.scss  and  ./components/windowResize.js
const horizontalBreakPoint = 50; //rem

// the initial window state needs to be set here so it is correct on page load
let initialWindowState = true;
if (Math.round(window.innerWidth * 0.0625) < horizontalBreakPoint) {
  initialWindowState = false;
}

//the default/initial state
export const setUIState = (
  {
    loginModalVisible = false,
    windowWidth = Math.round(window.innerWidth * 0.0625),
    windowHeight = Math.round(window.innerHeight * 0.0625),    
    appIsBlurred = false,
    appIsFocused = true
  } = {}
) => ({
  type: 'SET_UI_STATE',
  userInterface: {

    loginModalVisible,
    windowWidth,
    windowHeight,
    appIsBlurred,
    appIsFocused
  }
});

export const unsetAdminModalVisible = () => ({
  type: 'UNSET_ADMIN_MODAL_VISIBLE'
})
export const setAdminModalVisible = () => ({
  type: 'SET_ADMIN_MODAL_VISIBLE'
})
export const unsetLoginModalVisible = () => ({
  type: 'UNSET_LOGIN_MODAL_VISIBLE'
})
export const setLoginModalVisible = () => ({
  type: 'SET_LOGIN_MODAL_VISIBLE'
})


export const setPastedImageSize = (size) => ({
  type: 'SET_PASTED_IMAGE_SIZE',
  size
})

export const setMessagesSinceNotFocused = () => ({
  type: 'SET_MESSAGES_SINCE_NOT_FOCUSED'
})
export const unsetMessagesSinceNotFocused = () => ({
  type: 'UNSET_MESSAGES_SINCE_NOT_FOCUSED'
})
export const setAppIsFocused = () => ({
  type: 'SET_APP_FOCUSED'
})
export const unsetAppIsFocused = () => ({
  type: 'UNSET_APP_FOCUSED'
})
export const setPing = (ping) => ({
  type: 'UPDATE_PING',
  ping
});
export const setChatMessageInput = (inputValue = '') => ({
  type: 'SET_CHAT_MESSAGE_INPUT',
  inputValue
});
export const setWindowWidth = (windowWidth) => ({
  type: 'SET_WINDOW_WIDTH',
  windowWidth
});
/* export const setWindowHeight = (windowHeight) => ({
  type: 'SET_WINDOW_HEIGHT', //not used currently
  windowHeight
}); */

export const setNumberOfUserChannels = (numberOfUserChannels) => ({
  type: 'SET_NUMBER_OF_USER_CHANNELS',
  numberOfUserChannels
});
export const setWaitingForUserChannels = () => ({
  type: 'SET_WAITING_FOR_USER_CHANNELS'
});
export const unsetWaitingForUserChannels = () => ({
  type: 'UNSET_WAITING_FOR_USER_CHANNELS'
});
export const setDefaultChannelsReceived = () => ({
  type: 'SET_DEFAULT_CHANNELS_RECEIVED'
});
export const setConnected = () => ({
  type: 'SET_CONNECTED'
});
export const setDisconnected = () => ({
  type: 'SET_DISCONNECTED'
});
export const setDisconnectionReason = (disconnectionReason) => ({
  type: 'SET_DISCONNECTION_REASON',
  disconnectionReason
});
export const channelPickerShowFirstTab = () => ({
  type: 'CHANNEL_PICKER_SHOW_FIRST_TAB'
});
export const channelPickerShowSecondTab = () => ({
  type: 'CHANNEL_PICKER_SHOW_SECOND_TAB'
});
export const setChannelModalVisible = () => ({
  type: 'SET_CHANNEL_MODAL_VISIBLE'
});
export const unsetChannelModalVisible = () => ({
  type: 'UNSET_CHANNEL_MODAL_VISIBLE'
});
export const setStyleModalVisible = () => ({
  type: 'SET_STYLE_MODAL_VISIBLE'
});
export const unsetStyleModalVisible = () => ({
  type: 'UNSET_STYLE_MODAL_VISIBLE'
});
export const showChannelList = () => ({
  type: 'SHOW_CHANNEL_LIST'
});
export const hideChannelList = () => ({
  type: 'HIDE_CHANNEL_LIST'
});
export const showUserList = () => ({
  type: 'SHOW_USER_LIST'
});
export const hideUserList = () => ({
  type: 'HIDE_USER_LIST'
});
export const blurApp = () => ({
  type: 'BLUR_APP'
});
export const unblurApp = () => ({
  type: 'UNBLUR_APP'
});
export const setLeaveChannelModalVisible = () => ({
  type: 'SET_LEAVE_CHANNEL_MODAL_VISBLE'
});
export const unsetLeaveChannelModalVisible = () => ({
  type: 'UNSET_LEAVE_CHANNEL_MODAL_VISBLE'
});
export const setWaitingForLeaveChannelConfirmation = () => ({
  type: 'SET_WAITING_FOR_LEAVE_CHANNEL_CONFIRMATION'
})
export const unsetWaitingForLeaveChannelConfirmation = () => ({
  type: 'UNSET_WAITING_FOR_LEAVE_CHANNEL_CONFIRMATION'
})

