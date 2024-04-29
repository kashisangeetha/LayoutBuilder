// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamsDetails} = props
  const {name, id, teamImageURL} = teamsDetails

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageURL} alt={name} className="image" />
        <p>{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
