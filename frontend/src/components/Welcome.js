import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Welcome = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    return (
        <Col>
        <Row><h1 align="center"> Welcome {user.name} </h1></Row>
        <Row><h4 align="center">Now you can enjoy all the services!</h4></Row>    
        
    </Col>
    

    )
}

export default Welcome;