import { useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Container, Row, ThemeProvider } from 'react-bootstrap';
import { Login } from 'views';
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
                    <Routes>
                        <Route path="/" element={<div className='text-center'><Link to='/login'>Login</Link></div>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<div>Signup</div>} />
                    </Routes>
                </Row>
            </Container>
        </ThemeProvider>
    );
}

export default App;
