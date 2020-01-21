import { connect } from 'react-redux'
import { setRoute } from '../actions/UIActions'
import { serverImagePath } from '../config'

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
          <h3>2003 Nissan Patrol GU 3.0 ZD30ddi Manual Wagon</h3>
          <h4>Part Out or Sell Whole</h4>
          <p>Location: Wantirna, VIC 3152</p>
          <p>Sell Whole Price: $17,500</p>
          <p>Gallery:</p>
          <div className='listing-image-container'>
            <img className='listing-image' src={serverImagePath + 'IMG_20200113_154848_MP.jpg'} />
            <img className='listing-image' src={serverImagePath + 'IMG_20200113_154904.jpg'} />
            <img className='listing-image' src={serverImagePath + 'IMG_20200113_154919_MP.jpg'} />
            <img className='listing-image' src={serverImagePath + 'IMG_20200113_154934_MP.jpg'} />
            <img className='listing-image' src={serverImagePath + 'IMG_20200113_154955_MP.jpg'} />
            <img className='listing-image' src={serverImagePath + 'IMG_20200113_155002_MP.jpg'} />
          </div>
      </div>
    )
  }
}

export default connect(state=>state)(Listing)