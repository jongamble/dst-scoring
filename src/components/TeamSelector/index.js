import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';

import * as styles from './TeamSelector.module.css'

import { TEAMS } from '../../data/index';
import {setSelectedTeam} from '../../actions/selectedTeam';

const renderSelectOptions = (values = []) => {
  return values.map((value, keyBase = '', idx) => {
    return (<option key={`${keyBase}-${idx}`} value={value.id}>{value.name}</option>);
  });
}

const TeamSelector = () => {
  const dispatch = useDispatch()
  const handleChange = async (e) => {
    await dispatch(setSelectedTeam(e.target.value));
  }

  return ( 
    <Form inline>
      <Form.Group controlId="teamSelector">
        <Form.Label className="my-1 mr-4">Select a team</Form.Label>
        <Form.Control as="select" onChange={handleChange}>
          <option value="all">All</option>
          {renderSelectOptions(TEAMS, 'teams')}
        </Form.Control>
      </Form.Group>
    </Form>
   );
}
 
export default TeamSelector;