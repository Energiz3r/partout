import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { store } from './stores/store'
import AppMain from './components/AppMain'

import {
  setLoginStatus
} from './actions/actions';

if (!window.serverData) { window.serverData = {} }

const facebookCallback = (response) => {
  if (response.status == 'connected') {
    console.log("Logged in successfully!")
    store.dispatch(setLoginStatus(true));
  } else {
    console.log("Logged in failed!")
    store.dispatch(setLoginStatus(false));
  }
  return false
}
window.fbAsyncInit = function() {
  FB.init({
    appId      : '750335742141550',
    cookie     : true,  // enable cookies to allow the server to access the session
    cookie: true, 
    xfbml: false,
    status: true,
    oauth: true,
    version    : 'v3.2'
  })
  FB.Event.subscribe('auth.statusChange', function(response) {
    facebookCallback(response)
  })
}.bind(this);

// browser detection
//var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; // Opera 8.0+
//var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
//var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)); // Safari 3.0+ "[object HTMLElementConstructor]" 
const isIE = /*@cc_on!@*/false || !!document.documentMode; // Internet Explorer 6-11
//var isEdge = !isIE && !!window.StyleMedia; // Edge 20+
//var isChrome = !!window.chrome && !!window.chrome.webstore; // Chrome 1+
//var isBlink = (isChrome || isOpera) && !!window.CSS; // Blink engine detection

class ApplicationBase extends React.Component {
  constructor() {
    super()
    this.state = {
      displayMode: 'app'
    }
  }
  componentWillMount(){
    if (isIE) {
      //this.setState({displayMode:'IE'})
    }
  }
  render() {
    const { displayMode } = this.state
    if (displayMode == 'app') {
      return (
        <Provider store={store}>
          <AppMain />
        </Provider>
      )
    } else if (displayMode == 'IE') {
      return (
        <div className='noSupportContainer'>
          <h1>Sorry :(</h1>
          <h2>Your web browser, Internet Explorer, is not supported. Please download an alternative such as <a href="http://www.google.com/chrome">Google Chrome</a> or <a href="https://www.mozilla.org">Firefox</a>.</h2>
        </div>
      )
    }
  }
}

ReactDOM.render(<ApplicationBase />, document.getElementById('app'))
