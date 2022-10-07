import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CartSidebar from './CartSidebar';

const MyNav = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logOut = () => {
    localStorage.setItem("token", "");
    navigate("/login")
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/" as={Link}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/ProductDetail/:id" as={Link}></Nav.Link>
            <Nav.Link to="/Login" as={Link}>Login</Nav.Link>
            <Nav.Link to="/Purchases" as={Link}>Purchases</Nav.Link>
            <Nav.Link onClick={handleShow}>Cart</Nav.Link>
            <Nav.Link onClick={logOut}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<CartSidebar show={show} handleClose={handleClose}/>
   

    </div>
  );
};

export default MyNav;