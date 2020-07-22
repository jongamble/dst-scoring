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
        <Col>
          <h1>Compare D/ST Scoring</h1>
        </Col>
        <Col>
          <TeamSelector />
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <ScoringForm />
        </Col>
        <Col xs={7}>
          <DataTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
