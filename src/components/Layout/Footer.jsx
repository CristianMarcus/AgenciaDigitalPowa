// src/components/Layout/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../../styles/Footer.css'; // Importa el archivo CSS

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-4 text-center text-white main-footer"> {/* Aplicamos la clase main-footer */}
      <Container>
        <p className="mb-2">
          © {currentYear} Agencia Digital Powa. Todos los derechos reservados.
        </p>
        <div className="d-flex justify-content-center">
          {/* Aplicamos la clase footer-social-link a cada enlace */}
          <a href="https://github.com/CristianMarcus" target="_blank" rel="noopener noreferrer" className="footer-social-link mx-2" aria-label="GitHub">
            <FaGithub size="1.8em" />
          </a>
          <a href="https://www.linkedin.com/in/cristian-marcus2025/" target="_blank" rel="noopener noreferrer" className="footer-social-link mx-2" aria-label="LinkedIn">
            <FaLinkedin size="1.8em" />
          </a>
          <a href="mailto:cristianmarcus34@gmail.com" className="footer-social-link mx-2" aria-label="Email">
            <FaEnvelope size="1.8em" />
          </a>
        </div>
        <p className="mt-2 mb-0 footer-love-text"> {/* Aplicamos la clase footer-love-text */}
          Desarollo Agencia Digital Powa
        </p>
      </Container>
    </footer>
  );
};

export default Footer;