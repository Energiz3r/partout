import { connect } from 'react-redux'
import { FadeTransform } from 'react-animation-components'
import { webpackDevServer } from '../config'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const { loggedInFacebook, loggedInPartout } = this.props.login
    return (

      <div className={"modal-wrapper" + ((loggedInFacebook && loggedInPartout) ? ' modal-fade-out' : "")}>
        <FadeTransform in transformProps={{enterTransform: 'translateY(1.5rem)', exitTransform: 'translateY(-1.5rem)'}}>
          <div className="modal-outer-container">
            <div className="modal-inner-container">

              <div className="login-form-container">

                <h4>Welcome to PartOut!</h4>

                {loggedInFacebook && !loggedInPartout && <p>Logging in...</p>}

                {(!loggedInFacebook && !webpackDevServer) && 
                  <div
                    className="fb-login-button"
                    data-width=""
                    data-size="large"
                    data-button-type="continue_with"
                    data-auto-logout-link="false"
                    data-use-continue-as="true"
                    >
                  </div>
                }

                {!loggedInFacebook && <p>Please log in using Facebook to continue. We do not receive or store any of your personal or profile information except your email address, which is used only to alert you about changes to your listings unless you disable that feature. We will not share your information or use it for any other purpose except with your express permission.</p> }

              </div>

            </div>
          </div>
        </FadeTransform>
      </div>
    )
  }
}

export default connect(state=>state)(LoginForm)