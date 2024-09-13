import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { attributes } from '../content/settings/siteSettings.md';

function NavBar() {
  let {title, siteLogo, navBarLinks} = attributes;

  return (
    <Navbar bg="light" data-bs-theme="light" expand="xl">
      <Navbar.Brand href="/">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-links">
          {navBarLinks.map((link, key)=> {
            return(<Nav.Link key={key} href={link.linkURL}>{link.linkText}</Nav.Link>);
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
