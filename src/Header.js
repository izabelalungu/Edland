// import React from 'react';
import logo from './images/logo_edland_color.png';
import './Header.css';

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav } from 'react-bootstrap';
// import { slide as Menu } from 'react-burger-menu';

// const Header = () => {
//   return (
//     <Navbar expand="lg">
//       <div className="d-flex justify-content-between w-100">
//         <Navbar.Brand href="#home">Edland</Navbar.Brand>

//         {/* Show the burger menu only for mobile screens */}
//         <Menu right width="250px">
//           <a className="menu-item" href="#home">
//             Home
//           </a>
//           <a className="menu-item" href="#about">
//             About
//           </a>
//           <a className="menu-item" href="#contact">
//             Contact
//           </a>
//         </Menu>
//       </div>
//       {/* Hide the burger menu for desktop screens */}
//       <div className="desktop-menu">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </div>
//     </Navbar>
//   );
// };

// export default Header;

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#" className="ml-lg-auto"><img src={logo} alt="Edland" className="responsive-logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <Nav.Link href="#" active>Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Services</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;


