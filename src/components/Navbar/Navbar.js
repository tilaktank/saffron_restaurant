import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import classes from '../Navbar/Navbar.css';
import { Link } from "react-scroll";

function NavbarHeader() {
  return (
    <>
      <Navbar bg="#FFE9E0" style={{backgroundColor: "#FFE9E0"}} variant="dark">
        <Container>
          <Navbar.Brand href="#hero" className="fs-3 fw-bolder" style={{color: "#FC5005"}}>Saffron</Navbar.Brand>
          <Nav>
            <Nav.Link className={`${classes.nav__link} ${classes.firstnav__link} me-4 fw-bold text-dark`}>
              <Link
                activeClass={classes.active}
                to="offer"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Offers
              </Link>
            </Nav.Link>

            <Nav.Link className={`${classes.nav__link} ${classes.firstnav__link} me-4 fw-bold text-dark`}>
              <Link
                activeClass={classes.active}
                to="branch"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Branches
              </Link>
            </Nav.Link>

            <Nav.Link className={`${classes.nav__link} ${classes.firstnav__link} me-4 fw-bold text-dark`}>
              <Link
                activeClass={classes.active}
                to="menu"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Menu
              </Link>
            </Nav.Link>

            <Nav.Link className={`${classes.nav__link} ${classes.firstnav__link} me-4 fw-bold text-dark`}>
              <Link
                activeClass={classes.active}
                to="best"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Best Seller
              </Link>
            </Nav.Link>

            <Nav.Link className={`${classes.nav__link} ${classes.firstnav__link} me-4 fw-bold text-dark`}>
              <Link
                activeClass={classes.active}
                to="rating"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Ratings
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHeader;