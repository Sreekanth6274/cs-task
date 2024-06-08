import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

const Fly =()=>{
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="background">
      <Container>
        <Navbar.Brand className='tittle'   href="#home">AirFly</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-lg-auto mx-auto font">
            <Nav.Link className="font" href="#pricing">Flight</Nav.Link>
            <Nav.Link className="font" href="#features">Hotel</Nav.Link>
            <Nav.Link className="font" href="#pricing">Promo</Nav.Link>
            <Nav.Link className="font" href="#features">Orders</Nav.Link>
            <Nav.Link className="font" href="#pricing">INR</Nav.Link>
            <Nav.Link className="font" href="#features">Help</Nav.Link>
            <Nav.Link className="font" href="#pricing">Download App</Nav.Link>
            <Nav.Link className="font" href="#features">Signup</Nav.Link>
            <Nav.Link className="font" href="#pricing">Register</Nav.Link>
 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Fly;