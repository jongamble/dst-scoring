import React from 'react';
import { useSelector } from 'react-redux';

import { getSelectedTeamGames } from '../../selectors/selectedTeamSelectors';
import { getScoring } from '../../selectors/scoringSelectors';
import { computeWeeklyScore, defaultScoringValues } from '../../helpers';

const TeamScore = () => {
  const selectedTeamGames = useSelector(state => getSelectedTeamGames(state));
  const currentScoring = useSelector(state => getScoring(state));
  
  const renderWeeklyScores = (games, scoring) => {
    return Object.keys(games).map((val, idx) => {
      return (
        <tr key={`weekly-${idx}`}>
          <td>{val}</td>
          <td>{computeWeeklyScore(games[val], scoring)}</td>
          <td>{computeWeeklyScore(games[val], defaultScoringValues)}</td>
        </tr>
      )
    })
  }

  return ( 
    <>
      <thead>
        <tr>
          <th>Week #</th>
          <th>Weekly Score</th>
          <th>Current Scoring Method</th>
        </tr>
      </thead>
      <tbody>
        {renderWeeklyScores(selectedTeamGames, currentScoring)}
      </tbody>
    </>
   );
}
 
export default TeamScore;