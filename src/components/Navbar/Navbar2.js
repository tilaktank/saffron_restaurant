import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from '../Navbar/Navbar.css';

function BasicExample() {
  return (
    <Navbar bg="#FFE9E0" expand="lg" style={{backgroundColor: "#FFE9E0"}} variant="dark">
      <Container>
        <Navbar.Brand className="fs-3 fw-bolder" style={{color: "#FC5005"}} href="#hero">Saffron</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color:"black" }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={`${classes.nav__link} ${classes.firstnav__link} me-4 fw-bold text-dark`} href="#offer">Offers</Nav.Link>
            <Nav.Link className={`${classes.nav__link} ${classes.firstnav__link} me-4 fw-bold text-dark`} href="#branch">Branches</Nav.Link>
            <Nav.Link className={`${classes.nav__link} ${classes.firstnav__link} me-4 fw-bold text-dark`} href="#menu">Menu</Nav.Link>
            <Nav.Link className={`${classes.nav__link} ${classes.firstnav__link} me-4 fw-bold text-dark`} href="#best">Best Seller</Nav.Link>
            <Nav.Link className={`${classes.nav__link} ${classes.firstnav__link} me-4 fw-bold text-dark`} href="#rating">Ratings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;