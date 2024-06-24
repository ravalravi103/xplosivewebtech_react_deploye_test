import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <React.Fragment>

            <Navbar data-bs-theme="dark" style={{ backgroundColor: "black" }}>
                <Container >
                    <Navbar.Brand href="/">
                        <img src={process.env.PUBLIC_URL + '/app_image/brand/white_on_black.png'} alt="logo" width={340} />
                    </Navbar.Brand>
                    <Nav className='p-1' style={{ color: "white" }}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/process">What we do</Nav.Link>
                        <Nav.Link href="/contact">Contact us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default Header