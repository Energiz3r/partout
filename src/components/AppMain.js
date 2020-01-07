import React from 'react';
import DOMHandler from './DOMHandler';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

class AppMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: '',
      loggedIn: window.serverData.loggedIn, // already converted to boolean by PHP
      userName: window.serverData.userName,
      userID: window.serverData.userID,
      loginURL: window.serverData.loginURL,
    }
  }
  componentDidMount() {
    fetch("https://noobs.wtf/api.php", {
      //crossDomain: true,
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        action: 'checkLogin',
        value: 'test'
      })
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            result: result
          })
        },
        (error) => {
          this.setState({
            result: "error: " + error
          })
        }
      )
  }
  render() {
    const { result, loggedIn, userName, userID, loginURL } = this.state
    return (
      <Router>
        <div className={"app-root-container"}>
        <p>Result: {result}</p>
            <p>loggedIn: {loggedIn ? "yes" : "no"}</p>
            <p>UserName: {userName}</p>
            <p>userId: {userID}</p>
            <p>loginURL: {loginURL}</p>
          <DOMHandler />
          <div className={"app-overlay-container" + (this.props.userInterface.appIsBlurred ? " blur-container" : "")}>
            
            <Switch>
              <Route path="/">
                <LoginForm />
              </Route>
            </Switch>

            <div className={'app-color-overlay' + (this.props.userInterface.appIsBlurred ? ' app-color-overlay-visible' : ' app-color-overlay-invisible')}></div>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(state=>state)(AppMain);
