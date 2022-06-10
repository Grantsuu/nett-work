import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function Login() {
    return (
        <Container fluid className='p-0 text-center'>
            <Row className='m-0'>
                <Col className='p-0'>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}

export default Login;