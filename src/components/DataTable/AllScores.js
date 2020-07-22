import React from 'react';
import { useSelector } from 'react-redux';

import { getScoring } from '../../selectors/scoringSelectors';
import { computeYearlyScore, defaultScoringValues } from '../../helpers';
import { TEAMS } from '../../data';

const AllScores = () => {
  const currentScoring = useSelector(state => getScoring(state));
  
  const renderYearlyScores = (games, scoring) => {
    return games.map((val, idx) => {
      return (
        <tr key={`weekly-${idx}`}>
          <td>{val.name}</td>
          <td>{computeYearlyScore(val.games, scoring)}</td>
          <td>{computeYearlyScore(val.games, defaultScoringValues)}</td>
        </tr>
      )
    })
  }

  return ( 
    <>
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Season Score</th>
          <th>Current Scoring Method</th>
        </tr>
      </thead>
      <tbody>
        {renderYearlyScores(TEAMS, currentScoring)}
      </tbody>
    </>
   );
}
 
export default AllScores;