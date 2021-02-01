import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavbarC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Watches Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            exact
            to="/"
            className="nav-link"
            activeClassName="selected-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="nav-link"
            activeClassName="selected-link"
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            activeClassName="selected-link"
          >
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarC;
