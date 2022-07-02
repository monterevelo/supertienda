import React from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';

import { addCliente } from '../apis/crud';

const RegistroGeneral = () => {
    var user = JSON.parse(localStorage.getItem("user"));

    function save(even) {
        even.preventDefault();
        const obj = {
            cedula: even.target[0].value,
            nombre: even.target[1].value,
            direccion: even.target[2].value,
            ciudad: even.target[3].value,
            pais: even.target[4].value,
            celular: even.target[5].value,
            email: even.target[6].value,
            observaciones: even.target[7].value,
            photoUrl: user.photoUrl,
            id: user.uid,
        }
        addCliente(obj, (res) => {
            if (res == "Success") {
                user.flagNewUser = false;
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "/home";
            } else {
                alert("Algo salió mal, vuelve a intentarlo")
            }

        })
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <br />
                <h1>Regístrate!</h1>
            </div>
            <Form onSubmit={save}>
                <Form.Group className="mb-3" controlId="cedula">
                    <Form.Label>Cédula</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu cédula" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="direccion">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu dirección" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ciudad">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu ciudad" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pais">
                    <Form.Label>País</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu país" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="celular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="tel" placeholder="Ingresa tu número de celular" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="observaciones">
                    <Form.Label>Observaciones</Form.Label>
                    <Form.Control as="textarea" rows={3}  placeholder="Ingresa tus observaciones" type="text"/>
                </Form.Group>

                <Container fluid="md"/*  className='align-items-center' */>
                    <Row>
                        <Button variant='dark' type='submit'>
                            Hecho
                        </Button>
                    </Row>
                </Container>
                <br/>
                <br/>
            </Form>
        </>
    )
}

export default RegistroGeneral;
