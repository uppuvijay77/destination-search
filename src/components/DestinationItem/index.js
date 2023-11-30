// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {name, imageUrl} = destination

  return (
    <li>
      <img src={imageUrl} className="image" alt="Destination" />
      <p className="name"> {name} </p>
    </li>
  )
}

export default DestinationItem
