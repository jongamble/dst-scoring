import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import * as styles from './DataTable.module.css'
import {getSelectedTeam} from '../../selectors/selectedTeamSelectors';

const DataTable = () => {
  const selectedTeam = useSelector(state => getSelectedTeam(state));

  return ( 
    <div>The currently selected team is {selectedTeam.name}</div>
   );
}
 
export default DataTable;