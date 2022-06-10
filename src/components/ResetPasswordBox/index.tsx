import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function ResetPasswordBox() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return(
        <Container fluid className='p-0'>
            <Row className='m-0'>
                <Col className='p-0'>
                    <h1  className='display-6'>Reset Password<FontAwesomeIcon icon={['fas', 'lock-open']} className='ms-2'/></h1>
                </Col>
            </Row>
            <Row className='m-0 mb-2'>
                <Col className='p-0'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><FontAwesomeIcon icon={['fas', 'key']} className='me-1'/>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter password"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label><FontAwesomeIcon icon={['fas', 'lock']} className='me-1'/>Confirm Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Confirm password"
                            />
                            <Form.Control.Feedback type="invalid">
                                Passwords must match.
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

export default ResetPasswordBox;