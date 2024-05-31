import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg">
      <Navbar.Brand href="#home">ChefMaster</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#quick-meals">Quick Meals</Nav.Link>
          <Nav.Link href="#healthy- options">Healthy Options</Nav.Link>
          <Nav.Link href="#vegan- options">Vegan Options</Nav.Link>
          <Nav.Link href="#gluten-free">Gluten Free</Nav.Link>
          <Nav.Link href="#deserts">Deserts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
