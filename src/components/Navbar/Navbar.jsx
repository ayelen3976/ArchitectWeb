import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "./../../assests/logoRemo.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.scss";

function NavHome() {
  return (
    <div className="NavHome">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="Nave"
      >
        <img className="img" src={logo} alt="logo" />
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"> </Nav>
          <Nav className="mr-left texts">
            <Nav.Link>Sobre Mi</Nav.Link>
            <Nav.Link>Galeria</Nav.Link>
            <Nav.Link>Proyectos</Nav.Link>
            <Nav.Link>clkenlvkee</Nav.Link>
            <Nav.Link>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavHome;
