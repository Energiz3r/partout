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
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <Router>
        <div className={"app-root-container"}>
          <DOMHandler />

          

          <div className={"app-overlay-container" + (this.props.userInterface.appIsBlurred ? " blur-container" : "")}>
            {(!this.props.loginState.loggedInFacebook || !this.props.loginState.loggedInPartout) && <LoginForm />}
            <div className={'app-color-overlay' + (this.props.userInterface.appIsBlurred ? ' app-color-overlay-visible' : ' app-color-overlay-invisible')}></div>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(state=>state)(AppMain);
