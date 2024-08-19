// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {userSearch: ''}

  onUserType = event => {
    this.setState({userSearch: event.target.value})
  }

  render() {
    const {userSearch} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(userSearch),
    )
    return (
      <div className="bg">
        <h1>Destination Search</h1>
        <div className="search-con">
          <input
            placeholder="Search"
            className="search"
            type="search"
            value={userSearch}
            onChange={this.onUserType}
          />
          <img
            className="search-img "
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="ul">
          {searchResults.map(eachPlace => (
            <DestinationItem
              key={eachPlace.id}
              name={eachPlace.name}
              imgUrl={eachPlace.imgUrl}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
