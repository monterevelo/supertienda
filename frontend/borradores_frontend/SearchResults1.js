import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ConsultaCliente from '../components/ConsultaCliente'
import {Navigate} from 'react-router-dom'

const SearchResults = () => {
  var component = <Navigate to="/" />
  if (JSON.parse(localStorage.getItem('session')) != undefined) {
    component = <Container>
      <Row>
        <Col>
          <ConsultaCliente />
        </Col>
      </Row>
    </Container>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default SearchResults

