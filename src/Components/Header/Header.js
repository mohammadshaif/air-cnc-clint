import React from 'react';
import logo from '../../images/logo.png';     
import './Header.scss'  
import { Container, Row ,Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bgColor'>
            <Container>
                <Row>
                    <Navbar className='bgNav' expand="lg">
                    <Navbar.Brand href="/"><img src={logo} alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link className='nav-item'><Link to='/'>Host your home</Link></Nav.Link>
                        <Nav.Link className='nav-item'><Link to='/'>Host your experience</Link></Nav.Link>
                        <Nav.Link className='nav-item'><Link to='/help'>Help</Link></Nav.Link>
                        <Nav.Link className='nav-item'><Link to='/login'>Log in</Link></Nav.Link>
                        <Nav.Link className='nav-item sign-up'><Link to='/login'>Sign up</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </div>
    );
};

export default Header;