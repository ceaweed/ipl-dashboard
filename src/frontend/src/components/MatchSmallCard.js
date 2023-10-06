import { React } from 'react';

// We are accepting a match parameter from TeamPage.js
export const MatchSmallCard = ({match}) => {
  return (
    <div className="MatchSmallCard">
        <p>{match.team1} vs {match.team2}</p>
        
    </div>
  );
}

export default MatchSmallCard;