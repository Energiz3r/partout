import { store } from '../stores/store'
import {
  setLoginStatusFacebook,
  setLoginStatusPartout,
  setLoginStatus
} from '../actions/loginActions';
  
if (!window.serverData) { window.serverData = {} }



const partOutLoginRequest = () => {
  //console.log("Logging into to Partout...")
  fetch("api.php", {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "action": "partoutLogin"
    })
  })
    //.then((res) => { res.text().then(function (text) { console.log(text) }) }) //debug output from api.php
    .then(result => result.json())
    .then(
      (result) => {
        if (result.loggedIn === "1") {
          //console.log(result)
          //console.log("Partout auth successful!")
          store.dispatch(setLoginStatusPartout(true))
          setTimeout(()=>{
            store.dispatch(setLoginStatus(true)) // delay the login so the login modal can fade out
          }, 200)
        } else {
          console.log("Partout auth failed:")
          console.log(result)
        }
      },
      (error) => {
        console.log("error:")
        console.log(error)
      }
    )
}
const facebookLoginCheck = (fbResponse) => {
  //console.log("Checking facebook auth with Partout...")
  fetch("api.php", {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "action": "facebookLogin",
      "fb_access_token": fbResponse.accessToken
    })
  })
    //.then((res) => { res.text().then(function (text) { console.log(text) }) }) //debug output from api.php
    .then(result => result.json())
    .then(
      (result) => {
        if (result.loggedIn === "1") {
          partOutLoginRequest()
          //console.log("Partout accepted facebook auth!")
        } else {
          console.log("Partout failed facebook auth:")
          console.log(result)
        }
      },
      (error) => {
        console.log("error:")
        console.log(error)
      }
    )
}

export const facebookCallback = (response) => {
  //console.log("Facebook auth response received...")
  //console.log(response)
  if (response.status == 'connected') {
    setTimeout(()=>{
      store.dispatch(setLoginStatusFacebook(true))
      facebookLoginCheck(response.authResponse)
    },1000)
  } else {
    store.dispatch(setLoginStatusFacebook(false))
    store.dispatch(setLoginStatusPartout(false))
  }
  return false
}

export const dummyLogin = () => {
  setTimeout(()=>{
    store.dispatch(setLoginStatusFacebook(true))
    store.dispatch(setLoginStatusPartout(true))
  }, 800)
  setTimeout(()=>{
    store.dispatch(setLoginStatus(true)) // delay the login so the login modal can fade out
  }, 1200)
}