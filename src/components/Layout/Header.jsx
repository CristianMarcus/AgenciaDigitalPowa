// src/components/Layout/Header.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// NO IMPORTAMOS EL LOGO CON LA RUTA RELATIVA SI ESTÁ EN 'PUBLIC'
// import LogoPowa from '../../public/logopowa.jpeg'; // <--- ¡Eliminamos esta línea!
import '../../styles/Header.css'; // Tu CSS para el Header

const Header = () => {
  return (
    <div className="main-header-container">
      <Navbar expand="lg" variant="dark" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              // Volvemos a la ruta original para imágenes en la carpeta 'public'
              src="/logopowa.jpeg" // <--- ¡Así es como se referencia si está en la carpeta 'public'!
              alt="Agencia Digital Powa Logo"
              height="30"
              className="me-2 logo-image"
            />
            <span className="brand-text">Agencia Digital Powa</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
              <Nav.Link as={NavLink} to="/servicios">Servicios</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">Portafolio</Nav.Link>
              <Nav.Link as={NavLink} to="/about">Sobre Nosotros</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="contact-link">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;