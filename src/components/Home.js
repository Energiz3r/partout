import { connect } from 'react-redux'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>

        <div className="navbar-container">
          
        </div>

        <p>Home Page</p>
      </div>
    )
  }
}

export default connect(state=>state)(Home)