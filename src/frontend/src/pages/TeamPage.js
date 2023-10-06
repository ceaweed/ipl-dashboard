import { React, useEffect, useState } from 'react';
import MatchDetailCard from '../components/MatchDetailCard';
import MatchSmallCard from '../components/MatchSmallCard';

export const TeamPage = () => {

  // Creating a state to pass in data
  const [team, setTeam] = useState({matches: []});

  // Making the API call to our backend REST API app
  useEffect(
    () => {
      const fetchMatches = async () => {
        const response = await fetch('http://localhost:8080/team/Rajasthan Royals');
        const data = await response.json();
        setTeam(data);
      };
      fetchMatches();
    }, [] 
  );


  return (
    <div className="TeamPage">
        <h1>{team.teamName}</h1>
        <MatchDetailCard match={team.matches[0]}/>
        {/* For each match in matches -> create a new MatchSmallCard component*/}
        {team.matches.slice(1).map(match => <MatchSmallCard match={match} />)}
        
    </div>
  );
}

export default TeamPage;