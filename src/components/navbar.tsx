import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, useMatch } from "react-router-dom";

const menuNavbar: React.FC = () => {
  const navigate = useNavigate();
  const activeClassName = "nav__active";
  const matchHome = useMatch("/");
  const matchProfile = useMatch("/profile");
  const matchAbout = useMatch("/about");

  const gotoHome = () => {
    navigate("/");
  };
  const gotoProfile = () => {
    navigate("/profile", { state: { id: "5", name: "Thappkorn" } });
  };
  const gotoAbout = () => {
    navigate("/about");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid="md">
        <Navbar.Brand onClick={gotoHome} className="logo__navbar">
          Shool PlaToo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={gotoHome}
              className={matchHome ? activeClassName : undefined}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={gotoProfile}
              className={matchProfile ? activeClassName : undefined}
            >
              Profile
            </Nav.Link>
            <Nav.Link
              onClick={gotoAbout}
              className={matchAbout ? activeClassName : undefined}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default menuNavbar;
