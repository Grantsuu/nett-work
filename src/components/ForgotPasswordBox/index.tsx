import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Container, Form, Row } from 'react-bootstrap';

function ForgotPasswordBox() {
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
                    <h1 className='display-5 text-center mb-1'>Forgot Password</h1>
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

export default ForgotPasswordBox;