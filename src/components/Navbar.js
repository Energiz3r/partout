import { connect } from 'react-redux'
class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  onMenuClick = () => {
    this.props.onMenuToggle()
  }
  render() {
    return (
      <div className="navbar-container">
        <button onClick={this.onMenuClick} className='button-default navbar-button navbar-burger-button'><i className="fas fa-bars fa-navbar"></i></button>
        <h2>Partout</h2>
      </div>
    )
  }
}

export default connect(state=>state)(Navbar)