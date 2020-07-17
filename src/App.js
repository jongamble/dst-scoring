import React from 'react';
import * as styles from './App.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import TeamSelector from './components/TeamSelector';
import ScoringForm from './components/ScoringForm';
import DataTable from './components/DataTable';

function App() {
  return (
    <Container className={styles.container}>
      <Row className={styles.header}>
        <h1>Compare D/ST Scoring</h1>
      </Row>
      <Row>
        <Col xs={5}>
          <ScoringForm />
        </Col>
        <Col xs={7}>
          <TeamSelector />
          <DataTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
