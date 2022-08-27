import React from "react";
import { 
  Nav, 
  Navbar, 
  Container, 
  Offcanvas, 
  NavDropdown,
} from "react-bootstrap";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';

export const Navigation = () => {

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/" className="pt-1 pb-1">
              <FontAwesomeIcon icon={faBoxArchive} style={{"marginRight": "5px"}} />
              Application Tracker
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="navigation"
              bg="dark"
            >
              <Offcanvas.Header className="bg-dark navigation">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} id="btn-close-white">
                  X
                  </Navbar.Toggle>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-dark navigation">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown.Item href="/">
                    Home
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/applications">
                    Applications
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/offers">
                    Offers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/todos">
                    Todos
                  </NavDropdown.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
