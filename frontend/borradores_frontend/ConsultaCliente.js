import React from 'react'
import {Tab, Row, Col, Nav} from 'react-bootstrap'

const ConsultaCliente = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <br></br>
            <Row>
                <Col sm={1}>
                </Col>

                <Col sm={5}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={5}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <h1>Tab1</h1>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <h1>Tab2</h1>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>

                <Col sm={1}>
                </Col>

            </Row>
        </Tab.Container>
    )
}

export default ConsultaCliente
