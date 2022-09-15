import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';
import { NavDropdown } from 'react-bootstrap';


const NavbarContainer = () => {

  return (
    <Navbar bg="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="/" className='text-white fs-2'><b>Booking.com</b></Navbar.Brand>
        <Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Alert.Link href='/search'><Button variant="light">Search</Button></Alert.Link>
          </Form>
        </Nav>
       <Nav>
          <Nav.Link href="/login"><Button variant="light me-2">Login</Button></Nav.Link>
          <Nav.Link href='/register'><Button variant="light">Register</Button></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarContainer