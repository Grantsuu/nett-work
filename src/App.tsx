import { useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Col, Container, Row, ThemeProvider } from 'react-bootstrap';
import { Login, Signup } from 'views';
import { ForgotPasswordBox, LoginBox } from 'components';
import './App.css';

function App() {
    useEffect(() => {
        document.title = "Nett-work";
    }, [])

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        >
            <Container fluid className="p-0">
                <Row className='m-0'>
                    <h1 className='display-1 text-center'>Nett-work</h1>
                </Row>
                <Row className='m-0'>
                    <Col className='p-0'>
                        <Routes>
                            <Route path="/" element={<div className='text-center'><Link to='/login'>Login</Link></div>} />
                            <Route path="login" element={<Login />}>
                                <Route path='' element={<LoginBox/>} />
                                <Route path='forgot' element={<ForgotPasswordBox />} />
                            </Route>
                            <Route path="signup" element={<Signup />} />
                        </Routes>
                    </Col>
                </Row>
                <Row className='m-0'>
                    Footer
                </Row>
            </Container>
        </ThemeProvider>
    );
}

export default App;
