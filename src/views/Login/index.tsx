import { Col, Container, Row } from 'react-bootstrap';
import { LoginBox } from 'components';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Container fluid className='p-0 text-center'>
            <Row className='m-0'>
                <Col>
                    <h1>Login</h1>
                </Col>
            </Row>
            <Row className='m-0'>
                <Col>
                    <LoginBox />
                    <Link to='/forgot'>Forgot password?</Link>
                    <div>Need an account? <Link to='/signup'>Sign up</Link></div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;