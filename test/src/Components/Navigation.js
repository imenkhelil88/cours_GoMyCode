import './Navigation.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navigation=()=>{
    return (<div className="head-nav">
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">Portefolio</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
        <Nav.Link href="#pricing">Resume</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
        </div>)
}
export default Navigation