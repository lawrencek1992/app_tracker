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
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";

export const Navigation = ({ loggedInUser, setLoggedInUser }) => {
  function logout() {
    setLoggedInUser(null);
  }

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="/" className="pt-1 pb-1">
              <FontAwesomeIcon
                icon={faBoxArchive}
                style={{ marginRight: "5px" }}
              />
              Application Tracker
            </Navbar.Brand>
            {!loggedInUser && (
              <Nav.Link
                href="/login"
                className="navigation"
                variant="light"
                id="login-link"
              >
                Login "HOW THIS NOT CHANGE?"
              </Nav.Link>
            )}
            {!loggedInUser && (
              <Nav.Link
                href="create-user"
                className="navigation"
                variant="light"
                id="create-account-link"
              >
                Create Account
              </Nav.Link>
            )}
            {loggedInUser && (
              <Nav.Link
                href="/"
                onClick={() => logout()}
                variant="light"
                className="navigation"
                id="logout-link"
              >
                Logout
              </Nav.Link>
            )}
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
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                  id="btn-close-white"
                >
                  X
                </Navbar.Toggle>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-dark navigation">
                {loggedInUser ? (
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown.Item href="/" id="home-link">
                      Home
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/profile" id="profile-link">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/applications"
                      id="applications-link"
                    >
                      Applications
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/offers" id="offers-link">
                      Offers
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/todos" id="todos-link">
                      Todos
                    </NavDropdown.Item>
                  </Nav>
                ) : (
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown.Item href="/">Home</NavDropdown.Item>
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    {/**
                     * this is where to add the modal code
                     */}
                    <NavDropdown.Item href="/create-user">
                      Create Account
                    </NavDropdown.Item>
                  </Nav>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
