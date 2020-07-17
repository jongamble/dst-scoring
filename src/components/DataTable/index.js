import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import * as styles from './DataTable.module.css'
import { getSelectedTeam, getSelectedTeamGames } from '../../selectors/selectedTeamSelectors';
import { getScoring } from '../../selectors/scoringSelectors';
import { Table } from 'react-bootstrap';
import { computeWeeklyScore } from '../../helpers';

const DataTable = () => {
  const selectedTeam = useSelector(state => getSelectedTeam(state));
  const selectedTeamGames = useSelector(state => getSelectedTeamGames(state));
  const currentScoring = useSelector(state => getScoring(state));
  
  const renderWeeklyScores = (games, scoring) => {
    return Object.keys(games).map((val, idx) => {
      console.log(val);
      return (
        <tr key={`weekly-${idx}`}>
          <td>{val}</td>
          <td>{computeWeeklyScore(games[val], scoring)}</td>
        </tr>
      )
    })
  }

  return ( 
    <>
      <div>The currently selected team is {selectedTeam.name}</div>
      <Table>
        <thead>
          <tr>
            <th>Week #</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {renderWeeklyScores(selectedTeamGames, currentScoring)}
        </tbody>
      </Table>  
    </>
   );
}
 
export default DataTable;