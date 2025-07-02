// src/components/Layout/MainLayout.jsx
import React from 'react';
import Header from './Header'; // Crearemos este componente
import Footer from './Footer'; // Crearemos este componente
import { Container } from 'react-bootstrap'; // De React-Bootstrap

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100"> {/* Contenedor para ocupar toda la altura */}
      <Header />
      <main className="flex-grow-1 main-content"> {/* 'main-content' es tu clase global. 'flex-grow-1' para que ocupe el espacio disponible */}
        <Container> {/* Un contenedor de Bootstrap para centrar el contenido de las páginas */}
          {children} {/* Aquí se renderizarán los componentes de tus páginas (HomePage, ServicesPage, etc.) */}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;