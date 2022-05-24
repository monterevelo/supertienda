import React from 'react'
import {Container, Row, Col, Stack, Image} from 'react-bootstrap'
import logo from '../assets/img/logo-tienda1.jpg'
import UserDropDown from './UserDropDown'

const UserHome = () => {
  return (
    <Container fluid="md">
        <Row>
            <Col>
                <Stack gap={3} className="align-items-center">
                    <Image src={logo} width="700px" height="550px"/>
                    <UserDropDown/>
                </Stack>
            </Col>
        </Row>
    </Container>
  )
}

export default UserHome