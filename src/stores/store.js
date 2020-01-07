import { createStore, combineReducers } from 'redux';
import userInterfaceReducer from '../reducers/userInterfaceReducer';
import loginReducer from '../reducers/loginReducer';
import { buildForDev } from '../config';
import {
  setUIState,
  setLoginState,
} from '../actions/actions';

//CREATE STORE
const configureStore = () => {

  const reducers = {
    userInterface: userInterfaceReducer,
    loginState: loginReducer
  };
  
  if (buildForDev) {
    var store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ); //enables the REDUX plugin to talk to the corresponding Chrome extension
  } else {
    var store = createStore(combineReducers(reducers));
  }

  return store;
  
};

export const store = configureStore();

// populate the state with default values
store.dispatch(setUIState());
store.dispatch(setLoginState());

