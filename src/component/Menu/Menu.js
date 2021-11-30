import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container  >
                    <Navbar.Brand className='font-size font-typical text-info' href="#home">PORTFOLIO</Navbar.Brand>
                    <Nav className="ms-auto font-size">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;