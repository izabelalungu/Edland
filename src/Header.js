// import React from 'react';
import logo from './images/logo_edland_color.png';

// function Header() {
//   return (
//     <header className="header">
//       <img src={logo} alt="Edland" />
//       <nav>
//         <ul className="header__nav">
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li><a href="/contact">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components

function Header() {
  return (
    <Navbar bg="#333" expand="lg">
      <Navbar.Brand href="/"
       className="navbar_container">Edland</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;