import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import ResultList from '../components/ResultList';

const Consulta1 = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }
  const city = localStorage.getItem("city");
  return (
    <Container>
      <br></br>
      <Row>
        <Col sm={1}>
        </Col>
        <Col>
          <h1>Ciudad: {city}</h1>  
        </Col>
      </Row>

      <Row>
        <Col>
          <ResultList />
        </Col>
      </Row>
    </Container>
  )
}

export default Consulta1
