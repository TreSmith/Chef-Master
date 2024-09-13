import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { attributes } from '../content/settings/siteSettings.md';

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light" expand="xl">
      <Navbar.Brand href="#home">ChefMaster</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-links">
          <Nav.Link href="#quick-meals">Quick Meals</Nav.Link>
          <Nav.Link href="#lunch">Lunch</Nav.Link>
          <Nav.Link href="#dinner">Dinner </Nav.Link>
          <Nav.Link href="#healthy- options">Healthy Options</Nav.Link>
          <Nav.Link href="#vegan-options">Vegan Options</Nav.Link>
          <Nav.Link href="#gluten-free">Gluten Free</Nav.Link>
          <Nav.Link href="#deserts">Deserts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
