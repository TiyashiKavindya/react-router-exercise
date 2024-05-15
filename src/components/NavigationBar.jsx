import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';

// Navigation bar component using React Bootstrap components.
function NavigationBar() {
  return (
    // Navbar component from React Bootstrap with light background
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        {/* Brand name of the website with a link to the home page */}
        <Navbar.Brand href={ROUTES.HOME}>My Website</Navbar.Brand>
        <Nav className="me-auto">
          {/* Navigation links using Nav.Link component from React Bootstrap and Link component from react-router-dom */}
          <Nav.Link as={Link} to={ROUTES.HOME}>Home</Nav.Link>
          <Nav.Link as={Link} to={ROUTES.BLOGS}>Blogs</Nav.Link>
          <Nav.Link as={Link} to={ROUTES.CONTACT}>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;