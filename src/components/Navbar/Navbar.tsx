import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import logo from "./../../assests/logoRemo.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.scss";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useHistory } from "react-router-dom";
function NavHome() {
let history = useHistory();
  const HandClick = () => {
    history.push("/");
  };




  return (
    <div className="NavHome">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="Nave "
        sticky-top
      >
        {/* <img className="img" src={logo} alt="logo" onClick={HandClick} /> */}

        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"> </Nav>
          <Nav className="mr-left texts">
            <Nav.Link onClick={HandClick}>Home</Nav.Link>
            <Link to={"about"} smooth={true} duration={1000}>
              <Nav.Link>About me</Nav.Link>
            </Link>
            <Link to={"gallery"} smooth={true} duration={1000}>
              {" "}
              <Nav.Link>Gallery</Nav.Link>
            </Link>

            <Link to={"clients"} smooth={true} duration={1000}>
              {" "}
              <Nav.Link>Clients</Nav.Link>
            </Link>

            <NavDropdown
              title="Contact"
              id="collasible-nav-dropdown"
              className="menu_nav"
            >
              <Link to="/asesoria">
                <NavDropdown.Item href="#action/3.2">
                  Asesorias
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Item href="#action/3.3">Contacto</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link>Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavHome;
