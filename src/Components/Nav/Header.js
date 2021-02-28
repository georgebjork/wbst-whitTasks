import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'; //From react boostrap


export const Header = () => (

  <>
    <Container className="col-10">
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" >WhitTasks</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Why">Why</Nav.Link>
          <Nav.Link href="/Team">Team</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  </>
)



