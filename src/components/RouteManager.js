import { connect } from 'react-redux'
import { setInitialRoute, setRoute } from '../actions/UIActions'
class RouteManager extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        
      }
    }
    componentDidUpdate = (prevProps) => {
      const prev = prevProps.UI.route
      const next = this.props.UI.route
      if (prev != next) {
        this.props.history.push(next)
      }
    }
    componentDidMount = () => {
      const url = this.props.location.pathname
      this.props.dispatch(setInitialRoute(url))
      if (!this.props.login.loggedIn) {
        this.props.dispatch(setRoute('/login'))
      }
    }
    render() {
      return null
    }
  }
  
  export default connect(state=>state)(RouteManager)