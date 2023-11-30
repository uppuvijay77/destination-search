// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {name, imgUrl} = destination

  return (
    <li className="list">
      <img className="image" src={imgUrl} alt="Destination" />
      <p className="name"> {name} </p>
    </li>
  )
}

export default DestinationItem
