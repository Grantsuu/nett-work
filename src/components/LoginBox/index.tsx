import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Container, Form } from 'react-bootstrap';

function LoginBox() {
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
                    <h1 className='display-5 text-center mb-1'>Login</h1>
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
                            <Form.Control.Feedback type="invalid">
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
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <div className='d-grid'>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
                <Card.Footer className='text-center'>
                    <Link to='forgot'>Forgot password?</Link>
                </Card.Footer>
            </Card>
            <div className='text-center'>
                <div>Need an account? <Link to='/signup'>Sign up</Link></div>
                <Link to='reset'>Reset</Link>
            </div>
        </Container>
    )
}

export default LoginBox;