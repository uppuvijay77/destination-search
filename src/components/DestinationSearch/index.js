// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
   state = {searchInput: ''}
  const {destinationsList} = props

  const onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  console.log(destinationsList)
  return (
    <div className="bg-container">
      <h1 className="heading">Destination Search</h1>
      <div className="input-container">
        <input
          type="search"
          placeholder="Search"
          className="input-element"
          onChange={this.onChangeSearchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="search-icon"
        />
      </div>
      <ul className="list-container">
        {destinationsList.map(eachItem => (
          <DestinationItem destination={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
