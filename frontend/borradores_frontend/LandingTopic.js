import React from 'react'
import { Container, Row, Col, Image, Stack, Card } from 'react-bootstrap'
const img = "https://i.blogs.es/c51532/walmart_wenatchee/450_1000.jpg"

const LandingTopic = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={8}>
                        <Stack gap={3} className="align-items-center">
                            <Image src={img} width="700px" height="250px"/>
                        </Stack>
                    </Col>
                    <Col sm={4}>
                        <Stack gap={3} className="align-items-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Supertienda</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Qué es?</Card.Subtitle>
                                    <Card.Text>
                                        Esta es una aplicación que brinda una muy valiosa ayuda para el manejo adecuado
                                        y óptimo de todo tipo de negocios cuyo objeto social sea la venta de productos.
                                    </Card.Text>
                                    <Card.Link href="registrarse">Regístrate</Card.Link>
                                    <Card.Link href="/">Iniciar Sesión</Card.Link>
                                </Card.Body>
                            </Card>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LandingTopic
