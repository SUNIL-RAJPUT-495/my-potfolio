import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../css/header.css";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        bg="white"
        variant="light"
        fixed="top"
        className="p-3 "
      >
        <Container>
          <Navbar.Brand className="fw-bold fs-3" href="#">Sunil Shekhawat</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <Nav.Item>
                <Link
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav-link"
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav-link"
                >
                  About
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  to="Process"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav-link"
                >
                  Process
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  to="Potfolio"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav-link"
                >
                  Potfolio
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  to="Blog"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav-link"
                >
                  Blog
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  to="Services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav-link"
                >
                  Services
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="btn text-white nav-button ps-4 pe-4 ms-4" 
                >
                  Contact
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
