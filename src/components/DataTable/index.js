import React from 'react';
import { useSelector } from 'react-redux';

import * as styles from './DataTable.module.css'
import { getSelectedTeam } from '../../selectors/selectedTeamSelectors';
import { Table } from 'react-bootstrap';
import TeamScore from './TeamScore';
import AllScores from './AllScores';

const DataTable = () => {
  const isAllSelected = useSelector(state => getSelectedTeam(state).id === 'all');
  console.log(isAllSelected);

  return ( 
      <Table className={styles.dataTable}>
        {!isAllSelected && (<TeamScore />)}
        {isAllSelected && (<AllScores />)}
      </Table>  
   );
}
 
export default DataTable;