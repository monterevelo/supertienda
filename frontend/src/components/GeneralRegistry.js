import React from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';

import { addCustomer } from '../apis/crud';

const GeneralRegistry = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
   
    function save(even) {
        even.preventDefault();
        const obj = {
            indentificationCard: even.target[0].value,
            name: even.target[1].value,
            address: even.target[2].value,
            city: even.target[3].value,
            country: even.target[4].value,
            cellPhoneNumber: even.target[5].value,
            email: even.target[6].value,
            observations: even.target[7].value,
            photoUrl: user.photoUrl,
            id: user.uid,
        }
        addCustomer(obj, (res) => {
            console.log(obj);
            console.log(res);
            if (res == "Success") {
                user.flagNewUser = false;
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "/home";
            } else {
                alert("Something went wrong, try again.")
            }

        })
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <br />
                <h1>Customer Registration</h1>
            </div>
            <Form onSubmit={save}>
                <Form.Group className="mb-3" controlId="indentificationCard">
                    <Form.Label>Identification Card</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Indentification Card" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Country" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cellPhoneNumber">
                    <Form.Label>Cell Phone cellPhoneNumber</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your Cell Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="observations">
                    <Form.Label>Observations</Form.Label>
                    <Form.Control as="textarea" rows={3}  placeholder="Enter your Observations" type="text"/>
                </Form.Group>

                <Container fluid="md"/*  className='align-items-center' */>
                    <Row>
                        <Button variant='dark' type='submit'>
                            Done
                        </Button>
                    </Row>
                </Container>
                <br/>
                <br/>
            </Form>
        </>
    )
}

export default GeneralRegistry;
