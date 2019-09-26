import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';


const Styles = styled.div`
.navbar {
  background-color: black;
}
a.nav-link {
  font-size: 18px;
  &:link {
    color: white;
  }
  &:visited {
    color: hotpink;
  }
  &:active {
    color: skyblue;
  }
  &:hover {
    color: pink;
  }
}
`;

const CustomNavbar = () => (
  <Styles>
    <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark">
      <Navbar.Brand href="/">Sample-Boilerplate</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto nav-custom">
            <Nav.Link href="/">Form</Nav.Link>
            <Nav.Link eventKey={2} href="/pagetwo">
              Results
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default CustomNavbar;



// <Navbar fixed="top" expand="lg" variant="dark">
//    <Navbar.Brand href="/">
//      {'  Boilerplate Site'}
//   </Navbar.Brand>
//   <Navbar.Collapse id="basic-navbar-nav">
//   <Nav className="mr-auto">
//     <Nav.Link href="/">Home</Nav.Link>
//     <Nav.Link href="/pagetwo">Results</Nav.Link>
//   </Nav>
// </Navbar.Collapse>
// </Navbar>
