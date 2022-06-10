import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

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
            <Row className='m-0'>
                <Col className='p-0'>
                    <h1  className='display-5'>Login<FontAwesomeIcon icon={['fas', 'user']} size='sm' className='ms-2'/></h1>
                </Col>
            </Row>
            <Row className='m-0 mb-2'>
                <Col className='p-0'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><FontAwesomeIcon icon={['fas', 'envelope']} className='me-1'/>Email address</Form.Label>
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
                            <Form.Label><FontAwesomeIcon icon={['fas', 'key']} className='me-1'/>Password</Form.Label>
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
                </Col>
            </Row>
            <Row className='m-0'>
                <Col className='p-0'>
                    <Link to='forgot'>Forgot password?</Link>
                    <div>Need an account? <Link to='/signup'>Sign up</Link></div>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginBox;