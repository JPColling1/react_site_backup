import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/dashboards">
            Dashboards
          </NavLink>
          <NavLink to="/tools">
            Tools
          </NavLink>
          <NavLink to="/about">
            About Us
          </NavLink>
          <NavLink to="/contact">
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;