import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="black" expand="lg" variant='dark'>
      <Container>
        <LinkContainer to={"/"}>
            <img className='image-cropper' src="Logo.svg" alt="React Logo" />
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
          </Nav>

          <Offcanvas show={show} onHide={handleClose} responsive="lg" backdrop="true" placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Softory Labs</Offcanvas.Title>
            </Offcanvas.Header>
            
            <Offcanvas.Body>
              <Nav className="ms-auto" style={{ width: "100%" }}>

                <LinkContainer to="/">
                    <Nav.Link onClick={handleClose}><span className='px-2' style={{"font-size": "18px"}}>Home</span></Nav.Link>
                </LinkContainer>

                <LinkContainer to="/about">
                    <Nav.Link onClick={handleClose}><span className='px-2' style={{"font-size": "18px"}}>Why Us</span></Nav.Link>
                </LinkContainer>

                <LinkContainer to="/story">
                    <Nav.Link onClick={handleClose}><span className='px-2' style={{"font-size": "18px"}}>Our Story</span></Nav.Link>
                </LinkContainer>

                <LinkContainer to="/howwedoit">
                    <Nav.Link onClick={handleClose}><span className='px-2' style={{"font-size": "18px"}}>How We Do It</span></Nav.Link>
                </LinkContainer>

                <LinkContainer to="/careers">
                    <Nav.Link onClick={handleClose}><span className='px-2' style={{"font-size": "18px"}}>Careers</span></Nav.Link>
                </LinkContainer>

                <LinkContainer to="/contact">
                    <Button onClick={handleClose} variant='success' className='mx-2'><strong>Contact Us</strong></Button>
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