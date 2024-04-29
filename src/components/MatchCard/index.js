// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`

  return (
    <li className="list-item">
      <img
        src={competingTeamLogo}
        className="img"
        alt={`competing team ${competingTeam}`}
      />
      <p className="para">{competingTeam}</p>
      <p className="para">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
