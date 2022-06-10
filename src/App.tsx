import { useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Col, Container, Row, ThemeProvider } from 'react-bootstrap';
import { Login, Signup } from 'views';
import { ForgotPasswordBox, LoginBox } from 'components';
import './App.css';

// Mile high programing club :)

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
                    <Col xs='12' sm='10' md='5' lg='4' xl='3' className='p-0 mx-auto'>
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
