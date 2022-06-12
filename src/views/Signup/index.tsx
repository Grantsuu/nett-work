import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Container, Form } from 'react-bootstrap';

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
        <Container fluid className='p-0'>
            <Card bg='light' border='dark' text='dark'>
                <Card.Header>
                    <h1 className='display-5 text-center mb-1'>Signup</h1>
                </Card.Header>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><FontAwesomeIcon icon={['fas', 'envelope']} className='me-1' />Email address</Form.Label>
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
                            <Form.Label><FontAwesomeIcon icon={['fas', 'key']} className='me-1' />Password</Form.Label>
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
                            <Form.Label><FontAwesomeIcon icon={['fas', 'lock']} className='me-1' />Confirm Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Confirm password"
                            />
                            <Form.Control.Feedback type="invalid" className="text-start">
                                Passwords must match.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDisplayName">
                            <Form.Label><FontAwesomeIcon icon={['fas', 'id-card']} className='me-1' />Display Name</Form.Label>
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
                            <Form.Label><FontAwesomeIcon icon={['fas', 'phone']} className='me-1' />Phone Number</Form.Label>
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
                </Card.Body>
            </Card>
            <div className='text-center'>Have an account? <Link to='/login'>Login</Link></div>
        </Container>
    )
}

export default Signup;