import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom'
import Home from './Home'

class AppMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
  }
  render() {
    const { appIsBlurred } = this.props.UI
    const { loggedIn } = this.props.login
    return (
      <Router>
        <div className={"app-root-container"}>          
          {!loggedIn && <LoginForm />}
          <div className={"app-overlay-container" + ((appIsBlurred || !loggedIn) ? " blur-container" : "")}>
            
            {loggedIn && <Home />}
            <div className={'app-color-overlay' + ((appIsBlurred || !loggedIn) ? ' app-color-overlay-visible' : ' app-color-overlay-invisible')}></div>
          </div>
        </div>
      </Router>
    )
  }
}

export default connect(state=>state)(AppMain)
