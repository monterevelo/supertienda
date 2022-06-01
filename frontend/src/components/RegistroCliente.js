import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const RegistroCliente = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <br />
                <h1>Regístrate!</h1>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicCedula">
                    <Form.Label>Cédula</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu cédula" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDireccion">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu dirección" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCiudad">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu ciudad" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPais">
                    <Form.Label>País</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu país" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCelular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu número de celular" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu email" />
                </Form.Group>

                <Container fluid="md" className='align-items-center'>
                    <Row>
                        <Col>
                            <Button variant='dark' type='submit'>
                                Hecho
                            </Button>
                        </Col>
                    </Row>
                </Container>

            </Form>
        </>
    )
}

export default RegistroCliente
