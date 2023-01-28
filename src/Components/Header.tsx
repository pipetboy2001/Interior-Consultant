import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'


export const Header = () => {
  return (

    <>
      <Navbar bg="dark" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Interior Consultant
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Collection</Nav.Link>
                <Nav.Link href="/">About</Nav.Link>
                <Nav.Link href="/">Contact</Nav.Link>
                
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header
