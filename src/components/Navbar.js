import React from "react";
import styles from "../css/Navbar.module.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbar1() {
  // Import variable from UserContext here...
  const userLoggedIn = false;

  return (
    <Navbar className={styles.nav} collapseOnSelect expand="md" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <span className={styles.font}>Filmvisarna</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav className={styles.nav_links}>
          <Nav.Link as={Link} to="/" className={styles.link}>
            START
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className={styles.link}>
            OM OSS
          </Nav.Link>
          {userLoggedIn ? (
            <Nav.Link as={Link} to="/profile" className={styles.link}>
              MIN PROFIL
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/register" className={styles.link}>
              REGISTRERA
            </Nav.Link>
          )}
          {userLoggedIn ? (
            <Nav.Link className={styles.link}>LOGGA UT</Nav.Link>
          ) : (
            <Nav.Link className={styles.link}>LOGGA IN</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar1;