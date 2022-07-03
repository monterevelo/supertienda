import React from 'react'
import {Container, Row, Col, Stack, Image} from 'react-bootstrap'
import Storelogo from '../assets/img/StoreLogo.jpg'
import Welcome from './Welcome'
import SearchBar from './SearchBar'

const UserHome = () => {
  var user = JSON.parse(localStorage.getItem("user"));

  return (
    <Container fluid="md">
        <Row>
            <Col>
                <Stack gap={3} className="align-items-center">
                    <Image src={Storelogo} width="700px" height="550px"/>
                    <Welcome />
                    <SearchBar/>
                </Stack>
            </Col>
        </Row>
    </Container>
  );
};

export default UserHome;
