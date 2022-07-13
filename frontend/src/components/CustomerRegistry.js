import React from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';

import { addCustomer } from '../apis/crudCustomer';

const CustomerRegistry = () => {
    var user = JSON.parse(localStorage.getItem("user"));
       
    function save(even) {
        even.preventDefault();
        const obj = {
            indentificationCard: even.target[0].value,
            address: even.target[2].value,
            city: even.target[3].value,
            country: even.target[4].value,
            cellPhoneNumber: even.target[5].value,
            observations: even.target[7].value,
            name: user.name,
            email: user.email,
            photoUrl: user.photoUrl,
            id: user.uid,
        }
        addCustomer(obj, (res) => {
            console.log(obj);
            console.log(res);
            if (res == "Success") {
                user.flagNewUser = false;
                user.flagWithoutData = false;
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.removeItem("role");
                window.location.href = "/home";
            } else {
                alert("Something went wrong, try again.")
            }
        })
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <br /><br />
                <h1>Customer Registration</h1>
                <br />
            </div>
            <Form onSubmit={save}>
                <Form.Group className="mb-3" controlId="indentificationCard">
                    <Form.Label>Identification Card *</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Indentification Card" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control type="text" placeholder={user.name} disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address *</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City *</Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="country">
                    <Form.Label>Country *</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Country" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cellPhoneNumber">
                    <Form.Label>Cell Phone Number *</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your Cell Phone Number" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="email" placeholder={user.email} disabled/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="observations">
                    <Form.Label>Observations</Form.Label>
                    <Form.Control as="textarea" rows={3}  placeholder="Enter your Observations" type="text" />
                </Form.Group>
                <h6>(*) Required fields</h6>
                <br/>

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

export default CustomerRegistry;
