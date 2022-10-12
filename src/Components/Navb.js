import React, {useContext} from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import AuthContext from "../store/auth-context";

function Navb() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HowToBasic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="info" onClick={ctx.onLogout}>Logout</Button>
            {/* <Button variant="info">Signup</Button> */}
            
            {/* <Nav.Link href="#deets">Logout</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navb;
