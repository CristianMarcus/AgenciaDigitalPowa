// src/pages/PortfolioPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
// ¡Importamos Button! y eliminamos ListGroup ya que no lo usaremos
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
// ¡Importamos el ícono FaExternalLinkAlt para el botón!
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/PortfolioPage.css'; // Tu CSS para el Portafolio

const PortfolioPage = () => {
  // Array de objetos para cada proyecto. Esto hace tu código más DRY (Don't Repeat Yourself)
  // y más fácil de mantener. ¡Añade o edita proyectos aquí!
  const projects = [
    {
      title: "Capriccio de Pizza (React)",
      description: "Una plataforma de e-commerce para una pizzería, construida con JavaScript y React, alojada en Firebase. Optimización y velocidad para pedidos en línea.",
      image: "/screenshot-capicciodepizza-react.webp", // Ruta relativa a la carpeta 'public'
      alt: "Miniatura de Capriccio de Pizza (React)",
      link: "https://capiccio-de-pizza.web.app/"
    },
    {
      title: "Capriccio de Pizza (Django)",
      description: "Versión alternativa del e-commerce de Capriccio de Pizza, desarrollada con Python y Django para robustez y escalabilidad, desplegada en Render.",
      image: "/screenshot-capriccio-django.webp",
      alt: "Miniatura de Capriccio de Pizza (Django)",
      link: "https://capricciodepizza.onrender.com/"
    },
    {
      title: "La Abu Matie App",
      description: "Aplicación web interactiva diseñada para la gestión de pedidos digitales. Combina diseño intuitivo con funcionalidad avanzada.",
      image: "/LaAbuMatieSticker.webp",
      alt: "Miniatura de La Abu Matie App",
      link: "https://la-abu-matie-app.web.app/"
    },
    // Puedes añadir más proyectos aquí siguiendo el mismo formato:
    /*
    {
      title: "Nombre del Proyecto N",
      description: "Descripción detallada del proyecto N.",
      image: "/ruta/a/imagen-del-proyecto-n.webp",
      alt: "Miniatura del Proyecto N",
      link: "URL_DEL_PROYECTO_N"
    },
    */
  ];

  return (
    <Container className="my-5">
      <Helmet>
        <title>Portafolio | Powa Digital Services - Proyectos Web</title>
        <meta name="description" content="Echa un vistazo a nuestros proyectos más recientes de desarrollo y diseño web." />
      </Helmet>

      <h1 className="text-center portfolio-title-gradient">Nuestro Portafolio</h1>
      <p className="portfolio-lead-text text-center">Algunos de nuestros trabajos destacados, demostrando versatilidad y funcionalidad.</p>

      {/* Sección de Tiendas Digitales (ahora generada dinámicamente) */}
      <h2 className="portfolio-section-title">Tiendas Digitales (Apps Web Personalizadas)</h2>
      <Row className="g-4 mb-5">
        {/* Usamos el método map para renderizar cada proyecto del array */}
        {projects.map((project, index) => (
          <Col md={6} lg={4} key={index}> {/* Usar index como key si no tienes un ID único para cada proyecto */}
            <Card className="h-100 shadow-sm portfolio-card">
              <div className="portfolio-card-img-container">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.alt}
                  className="portfolio-card-img"
                />
              </div>
              <Card.Body className="d-flex flex-column"> {/* Añadimos flex-column para alinear el botón abajo */}
                <Card.Title className="text-primary">{project.title}</Card.Title>
                <Card.Text className="flex-grow-1"> {/* flex-grow-1 para que el texto ocupe el espacio disponible */}
                  {project.description}
                </Card.Text>
                {/* Reemplazamos el ListGroup con un Button */}
                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto portfolio-button" // mt-auto para empujar el botón al fondo, clase personalizada para estilos
                  variant="primary" // Color del botón de Bootstrap, puedes cambiarlo (secondary, success, etc.)
                >
                  Ver Proyecto <FaExternalLinkAlt className="ms-2" /> {/* Ícono de enlace externo con margen */}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Si quieres añadir otras secciones, puedes replicar el bloque anterior,
          creando un nuevo array de proyectos para esa sección. */}

    </Container>
  );
};

export default PortfolioPage;