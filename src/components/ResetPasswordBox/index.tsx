import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Container, Form } from 'react-bootstrap';

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

    return (
        <Container fluid className='p-0'>
            <Card bg='light' border='dark' text='dark'>
                <Card.Header>
                    <h1 className='display-5 text-center mb-1'>Reset Password</h1>
                </Card.Header>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><FontAwesomeIcon icon={['fas', 'key']} className='me-1' />Password</Form.Label>
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
                            <Form.Label><FontAwesomeIcon icon={['fas', 'lock']} className='me-1' />Confirm Password</Form.Label>
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
                </Card.Body>
                <Card.Footer className='text-center'>
                    <Link to='/login'>Back to Login</Link>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default ResetPasswordBox;