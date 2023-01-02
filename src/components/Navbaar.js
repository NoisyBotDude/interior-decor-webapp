import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbaar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src='https://media.istockphoto.com/id/1290057225/vector/house-icon-and-interior-design-with-lamp-drawer-shelf-home-furniture-illustration-stock.jpg?s=1024x1024&w=is&k=20&c=t6FDb3SXoJ_L1SExoa7f56XZUuYAPBYsQMX0ewoFhNQ=' width={50} height={50}></img> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home" className='ms-4'>Home</Nav.Link>
                            <Nav.Link href="#" className='ms-4'>Designers</Nav.Link>
                            <Nav.Link href="/design_ideas" className='ms-4'>Design Ideas</Nav.Link>
                            <Nav.Link href="/contact" className='ms-4'>AboutUs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbaar