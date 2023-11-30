// Write your code here

import {Component} from 'react'

import './index.css'

import '../DestinationItem/index'

const DestinationSearch = props => {
  const state = {searchInput: ''}
  const {destinationList} = props

  return (
    <div className="bg-container">
      <h1 className="heading">Destination Search</h1>
      <div className="input-container">
        <input type="search" placeholder="Search" className="input-element" />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="search-icon"
        />
        <ul>
          {destinationList.map(eachItem => (
            <DestinationItem destination={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DestinationSearch
