import { Navbar, NavbarBrand, Row, Col } from "reactstrap";

import "../styles.css";

const Header = () => {
  return (
    <Navbar dark expand="md" className="larger-navbar">
      <NavbarBrand className="ms-5" href="/">
        <Row>
          <Col sm="3" className="d-flex flex-column">
            <h1 className="mb-3 mt-auto">Secret Santa</h1>
            <p>Created by Nephi Banegas</p>
          </Col>
          <Col sm="9" className="d-flex align-items-center justify-content-end">
            <img
              src="/secret-santa-clear-removebg-preview.png"
              alt="Logo"
              className="logo"
            />
          </Col>
        </Row>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
