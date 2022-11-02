import { NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to={"/"}>
          <Navbar.Brand href="#home">Mythics Cloud Portal</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;