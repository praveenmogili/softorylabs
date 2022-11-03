import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useState} from 'react';


const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to={"/"}>
          {/* <Navbar.Brand> */}
            <img className='image-cropper' src="Logo.svg" alt="React Logo" />
          {/* </Navbar.Brand> */}
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
        <Navbar.Collapse id="basic-navbar-nav">
          {/*This totally empty navbar with the class 'me-auto' is significant. */}
        <Nav className="me-auto">
        </Nav>
        <Offcanvas show={show} onHide={handleClose} responsive="lg" backdrop="true" placement='end'>
          <Offcanvas.Header closeButton>
          <LinkContainer to={"/"}>
            <Offcanvas.Title>Mythics Cloud Portal</Offcanvas.Title>
            </LinkContainer>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav className="ms-auto" style={{ width: "100%" }}>
            <LinkContainer to="/">
                <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
                <Nav.Link>Why Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/story">
                <Nav.Link>Our Story</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/howwedoit">
                <Nav.Link>How We Do It</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/careers">
                <Nav.Link>Careers</Nav.Link>
            </LinkContainer>
          </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;