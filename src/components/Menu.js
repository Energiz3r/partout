import { connect } from 'react-redux'
import { setRoute } from '../actions/UIActions'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  onMenuClick = () => {
    this.props.onMenuToggle()
  }
  onSupportClick = () => {
    this.props.dispatch(setRoute('/support'))
  }
  render() {
    return (
      <div className="menu-container">
        <button onClick={this.onCreateClick} className="button-default button-good menu-button"><i className="far fa-plus-square fa-menu"></i>create listing</button>
        <button onClick={this.onSupportClick} className="button-default button-bad menu-button"><i className="far fa-minus-square fa-menu"></i>delete listing</button>
        <button onClick={this.onSupportClick} className="button-default menu-button"><i className="far fa-question-circle fa-menu"></i>support</button>
      </div>
    )
  }
}

export default connect(state=>state)(Menu)