import React from 'react'
import { connect } from 'react-redux'
import { setLoggedIn } from '../actions/loginActions'
import { setAppReady } from '../utils/setAppState'
import LoginUserForm from './LoginForm'
import LoginCreateForm from './LoginCreateForm'

import { FadeTransform } from 'react-animation-components'

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      fadeOut: false,
      accountWasCreated: false
    }
  }
  unmount = () => {
    this.setState({
      ...this.state,
      fadeOut: true
    })
    this.props.dispatch(setLoggedIn())
    setTimeout(()=>{
      setAppReady();
    },150)
  }
  goToLoginTab = () => {
    this.setState({
      ...this.state,
      activeTab: 1,
      accountWasCreated: true
    })
  }
  render() {
    return (

      <div className={"modal-wrapper" + (this.state.fadeOut ? ' modal-fade-out' : "")}>

        <FadeTransform in transformProps={{enterTransform: 'translateY(1.5rem)', exitTransform: 'translateY(-1.5rem)'}}>
        
          <div className="modal-outer-container">
            <div className={"modal-inner-container"}>

              <div className="tab-container">

                <div className={"loginTab tab" + (this.state.activeTab == 1 ? " tab-selected" : "")}
                onClick={()=>{
                  this.setState({
                    ...this.state,
                    activeTab: 1
                  })
                }}>
                  <h1>Login</h1>
                  <div className="loginTabBadges">
                    <i className="fas fa-envelope-square"></i>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-google-plus-square"></i>
                  </div>
                </div>

                <div className={"guestTab tab" + (this.state.activeTab == 2 ? " tab-selected" : "")}
                onClick={()=>{
                  this.setState({
                    ...this.state,
                    activeTab: 2
                  })
                }}>
                  <h1>Register</h1>
                </div>

              </div>

              {this.state.activeTab == 0 && 
                <FadeTransform in duration={100} transformProps={{enterTransform: 'translateY(1.5rem)', exitTransform: 'translateY(-1.5rem)'}}>
                  <div className="login-option-container">
                    
                  </div>
                </FadeTransform>
              }

              {this.state.activeTab == 1 && 
                <FadeTransform in duration={100} transformProps={{enterTransform: 'translateY(1.5rem)', exitTransform: 'translateY(-1.5rem)'}}>
                  <div className="login-option-container">
                    <LoginUserForm unmount={this.unmount} accountWasCreated={this.state.accountWasCreated} />
                  </div>
                </FadeTransform>
              }

              {this.state.activeTab == 2 && 
                <FadeTransform in duration={100} transformProps={{enterTransform: 'translateY(1.5rem)', exitTransform: 'translateY(-1.5rem)'}}>
                  <div className="login-option-container">
                    <LoginCreateForm goToLoginTab={this.goToLoginTab} />
                  </div>
                </FadeTransform>
              }

              {this.state.activeTab < 2 && 
                <div className="containerChannelPicker">
                  
                </div>
              }

            </div>
          </div>
      
          </FadeTransform>
      </div>
    );
  };
}

export default connect((state)=>{return state})(LoginModal);