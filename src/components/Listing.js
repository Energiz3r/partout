import { connect } from 'react-redux'
import { setRoute } from '../actions/UIActions'

class Listing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  onClick = () => {
    this.props.dispatch(setRoute('/home'))
  }
  render() {
    return (
      <div>
          <p>Hello. Route is: {this.props.location.pathname}</p>
          <button className='button-default' onClick={this.onClick}>Home</button>
      </div>
    )
  }
}

export default connect(state=>state)(Listing)