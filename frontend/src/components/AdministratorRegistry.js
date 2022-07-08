import React from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';

import { addAdministrator } from '../apis/crudAdministrator';


const AdministratorRegistry = () => {
    var user = JSON.parse(localStorage.getItem("user"));
        
    function save(even) {
        
        even.preventDefault();
        const obj = {
            indentificationCard: even.target[0].value,
            name: even.target[1].value,
            city: even.target[2].value,
            country: even.target[3].value,
            cellPhoneNumber: even.target[4].value,
            email: even.target[5].value,
            observations: even.target[6].value,
            photoUrl: user.photoUrl,
            id: user.uid,
        };
        addAdministrator(obj, (res) => {
            console.log(obj);
            console.log(res);
            if (res == "Success") {
                user.flagNewUser = false;
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.removeItem("role");
                window.location.href = "/home";
                
            } else {
                alert("Something went wrong, try again.")
            };
        });
    };

    return (
        <>
            
            <div style={{ textAlign: "center" }}>
                <br /><br />
                <h1>Administrator Registration</h1>
                <br />
                
            </div>
            <Form onSubmit={save}>
            
                <Form.Group className="mb-3" controlId="indentificationCard">
                    <Form.Label>Identification Card</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Indentification Card" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder={user.name} />
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
                    <Form.Label>Cell Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your Cell Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder={user.email} />
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

export default AdministratorRegistry;
