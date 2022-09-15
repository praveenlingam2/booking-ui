import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const SimpleNavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" >
    <Container>
        <Navbar.Brand href="/" className='text-white fs-2'><b>Booking.com</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default SimpleNavBar