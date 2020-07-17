import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as styles from './ScoringForm.module.css'

import { SCORING_METRICS } from '../../data'
import {setScoring} from '../../actions/scoring';

const renderFormFields = (values = [], handleChange) => {
  return values.map((value, keyBase = '', idx) => {
    return (
      <Form.Group key={`${keyBase}-${idx}`} className={styles.formGroup}>
        <Form.Label xs={8}>{value.name}</Form.Label>
        <Form.Control xs={4} type="number" name={value.id} id={value.id} onChange={handleChange} defaultValue={value.defaultValue} />
      </Form.Group>
    );
  });
}

const ScoringForm = () => {
  const dispatch = useDispatch()
  const handleChange = async (e) => {
    await dispatch(setScoring({'key': e.target.name, 'value': e.target.value}));
  }

  return ( 
    <Form inline className={styles.scoringForm}>
      {renderFormFields(SCORING_METRICS, handleChange)}
    </Form>
   );
}
 
export default ScoringForm;