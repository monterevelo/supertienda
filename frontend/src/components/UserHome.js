import React from 'react'
import {Container, Row, Col, Stack, Image} from 'react-bootstrap'
import logo from '../assets/img/logo-tienda1.jpg'
import Bienvenido from './Bienvenido'
import SearchBar from './SearchBar'

const UserHome = () => {
  var user = JSON.parse(localStorage.getItem("user"));

  return (
    <Container fluid="md">
        <Row>
            <Col>
                <Stack gap={3} className="align-items-center">
                    <Image src={logo} width="700px" height="550px"/>
                    <Bienvenido />
                    <SearchBar/>
                </Stack>
            </Col>
        </Row>
    </Container>
  );
};

export default UserHome;
