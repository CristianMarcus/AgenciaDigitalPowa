// src/pages/AboutPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/AboutPage.css'; // Importa este CSS para estilos específicos

const AboutPage = () => {
  return (
    <Container className="my-5 about-page-container">
      <Helmet>
        <title>Sobre Nosotros | Agencia Digital Powa</title>
        <meta name="description" content="Conoce más sobre Powa Digital Services y el desarrollador detrás de tus proyectos web." />
      </Helmet>

      <div className="about-main-card mx-auto">
        <h1 className="text-center mb-5 about-header-title">
          Sobre Nosotros / Nuestra Historia
        </h1>

        {/* Primer párrafo: Historia y Filosofía de la Agencia */}
        <p className="about-intro-paragraph text-center text-md-start mb-5">
          En **Agencia Digital Powa**, transformamos visiones en soluciones digitales impactantes.
          Con una trayectoria sólida en el desarrollo de software y una especialización en diseño de experiencia
          de usuario, nuestra historia se forja en cada proyecto donde la innovación y la funcionalidad se encuentran.
          Nuestra filosofía de trabajo se centra en la colaboración estrecha con el cliente, la adaptabilidad a las necesidades
          cambiantes y la entrega de productos digitales que no solo cumplen, sino que superan las expectativas.
          Dominamos la programación avanzada y el diseño intuitivo, lo que nos permite crear aplicaciones robustas,
          escalables y visualmente atractivas, asegurando que cada solución sea una herramienta estratégica para
          el éxito de nuestros clientes.
        </p>

        {/* Sección: Tu perfil profesional (Cristian) */}
        <Row className="align-items-center g-4 mt-5 pt-4 border-top border-secondary-subtle">
          <Col xs={12} md={4} className="text-center">
            <div className="profile-image-container">
              <Image
                src="/CristianMarcus-Portada.webp" // Ruta en 'public'
                alt="Cristian Marcus - Desarrollador Web"
                className="profile-image img-fluid"
              />
            </div>
          </Col>

          <Col xs={12} md={8}>
            <h2 className="about-profile-section-title text-center text-md-start mb-4 text-secondary">
              (Cristian): Desarrollo Web & Software
            </h2>
            <p className="about-profile-paragraph text-center text-md-start">
              Como profesional apasionado por el mundo digital, mi trayectoria se ha forjado a lo largo de **5 años**
              dedicados a transformar desafíos en soluciones tecnológicas innovadoras. He colaborado en proyectos que abarcan
              desde el desarrollo de plataformas web robustas hasta la implementación de estrategias digitales que impulsan el crecimiento.
              Mi filosofía de trabajo se centra en una escucha activa y una colaboración transparente, asegurando que cada línea de código
              y cada decisión de diseño estén perfectamente alineadas con tus objetivos de negocio. Mi compromiso no solo es entregar
              un producto final de alta calidad, sino ser un socio estratégico que aporta creatividad, eficiencia y una visión
              orientada a resultados, haciendo de tu éxito mi máxima prioridad.
            </p>
          </Col>
        </Row>

        {/* Sección: Perfil de la Colaboradora (Mariana) */}
        <Row className="align-items-center g-4 mt-5 pt-4 border-top border-secondary-subtle">
          <Col xs={12} md={8} className="order-md-1">
            <h2 className="about-profile-section-title text-center text-md-start mb-4 text-secondary">
              (Mariana): Diseño UX/UI & Community Manager
            </h2>
            <p className="about-profile-paragraph text-center text-md-start">
              Con una visión fresca y estratégica, **Mariana** lidera la experiencia de usuario y la gestión de comunidades en Agencia Digital Powa. Su expertise en diseño UX/UI asegura que cada interacción sea intuitiva y placentera, mientras que su habilidad como Community Manager construye y nutre la presencia online de nuestros clientes, transformando seguidores en comunidades leales y engagement significativo. Su enfoque multidisciplinar garantiza que tus proyectos no solo se vean bien, sino que también funcionen de manera óptima y conecten eficazmente con tu audiencia.
            </p>
          </Col>

          <Col xs={12} md={4} className="text-center order-md-2">
            <div className="profile-image-container">
              <Image
                src="/mariana.webp" // Ruta en 'public'
                alt="Mariana - Diseñadora UX/UI y Community Manager"
                className="profile-image img-fluid"
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AboutPage;