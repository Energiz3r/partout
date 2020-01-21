import { connect } from 'react-redux'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }
  render() {
    const {initialRoute,initialRouteRedirect} = this.props.UI
    return (
      <div>
        
        <p>Home Page</p>
        <p>Initial Route: {initialRoute}</p>
        <p>Initial Set: {initialRouteRedirect ? 'yes' : 'no'}</p>
      </div>
    )
  }
}

export default connect(state=>state)(Home)