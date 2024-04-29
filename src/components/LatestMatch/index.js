import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchData

  return (
    <div className="latest-match">
      <h1 className="heading">Latest Matches</h1>
      <div className="card">
        <div className="details">
          <div className="details1">
            <p className="para1">{competingTeam}</p>
            <p className="para1">{date}</p>
            <p className="para1">{venue}</p>
            <p className="para1">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="img"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="separator" />
        <div className="container">
          <p className="label">First Innings</p>
          <p className="label">{firstInnings}</p>
          <p className="label">Second Innings</p>
          <p className="label">{secondInnings}</p>
          <p className="label">Man Of The Match</p>
          <p className="label">{manOfTheMatch}</p>
          <p className="label">Umpires</p>
          <p className="label">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
