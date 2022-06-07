import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function Signup() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container fluid className='p-0 w-25 text-center'>
            <Row className='m-0'>
                <Col className='p-0'>
                    <h1>Signup</h1>
                </Col>
            </Row>
            <Row className='m-0 mb-2'>
                <Col className='p-0'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please provide a valid e-mail address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please provide a valid password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Confirm password"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Passwords need to match.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDisplayName">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control 
                                required
                                type="text"
                                placeholder="Display name"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please provide a valid display name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control 
                                required
                                type="text"
                                placeholder="Phone number"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Please provide a valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className='d-grid'>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
            <Row className='m-0'>
                <Col className='p-0'>
                    <Link to='/login'>Back to Login</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;