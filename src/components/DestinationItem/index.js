// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props

  return (
    <li className="list-item">
      <img className="img" src={imgUrl} alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
