// src/pages/HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// Importa los íconos de React Icons que quieras usar (ejemplos)
import { FaCode, FaLightbulb, FaChartLine, FaQuoteLeft } from 'react-icons/fa';

// Asegúrate de que este path sea correcto para tu archivo de estilos
import '../styles/HomePage.css';

const HomePage = () => {
    // Configuración de useInView para cada sección animada
    const [refIntro, inViewIntro] = useInView({
        triggerOnce: true,
        threshold: 0.3, // 30% del elemento visible para disparar
    });

    const [refServices, inViewServices] = useInView({
        triggerOnce: true,
        threshold: 0.2, // Un umbral más bajo para que las tarjetas de servicio aparezcan antes
    });

    const [refTestimonials, inViewTestimonials] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [refCtaFinal, inViewCtaFinal] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <>
            <Helmet>
                <title>Inicio | Powa Digital Services - Tu Agencia de Desarrollo Web</title>
                <meta name="description" content="Agencia Digital Powa ofrece desarrollo y diseño web profesional, marketing digital y soluciones UI/UX para potenciar tu presencia online y tu negocio." />
            </Helmet>

            {/* Sección Hero - El banner principal impactante */}
            <section className="hero-section">
                <img
                    src="/desarrollo-de-sitios-web.webp" // Asegúrate de que esta imagen exista en tu carpeta public
                    alt="Banner principal de Powa Digital Services: desarrollo web y soluciones digitales"
                    className="hero-image"
                />
                <div className="hero-overlay"></div> {/* La capa oscura/transparente sobre la imagen */}

                <div className="hero-content"> {/* Contenedor para el texto y el botón */}
                    <h1 className="hero-title">
                        Tu Visión Digital, Nuestra Experiencia
                    </h1>
                    <p className="hero-subtitle">
                        Agencia Digital Powa: Diseñamos y desarrollamos experiencias web impactantes que impulsan tu negocio al éxito online.
                    </p>
                    {/* Usamos Link de react-router-dom para una navegación SPA */}
                    <Link to="/servicios" className="hero-cta-button">
                        Explora Nuestros Servicios
                    </Link>
                </div>
            </section>

            {/* Sección de Bienvenida/Introducción - Un poco más de contexto sobre Powa */}
            <Container className="text-center my-5 py-5" ref={refIntro}> {/* Adjuntamos el ref para la animación */}
                <Row className="justify-content-center">
                    <Col xs={12} md={10}>
                        {/* Las clases `animate-on-scroll` y `slide-up` se añaden para control CSS */}
                        <h2 className={`section-title animate-on-scroll slide-up ${inViewIntro ? 'is-visible' : ''}`}>Impulsando tu Presencia Online</h2>
                        <p className={`lead section-description animate-on-scroll slide-up delay-1 ${inViewIntro ? 'is-visible' : ''}`}>
                            En Powa Digital Services, nos apasiona convertir tus ideas en plataformas digitales funcionales y atractivas.
                            Desde el desarrollo de sitios web personalizados hasta estrategias de marketing digital,
                            trabajamos contigo para asegurar que tu presencia online no solo exista, sino que prospere y genere resultados tangibles.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* --- Sección de Servicios Destacados - Muestra lo más importante que ofreces --- */}
            <Container className="my-5 services-highlight-section py-5" ref={refServices}> {/* Adjuntamos el ref */}
                <h2 className={`text-center mb-5 section-title animate-on-scroll slide-up ${inViewServices ? 'is-visible' : ''}`}>Nuestros Servicios Clave</h2>
                <Row className="justify-content-center g-4"> {/* `g-4` para un buen espacio entre las tarjetas */}
                    {/* Tarjeta de Servicio 1: Desarrollo Web */}
                    <Col xs={12} sm={6} lg={4}>
                        <div className={`service-card animate-on-scroll scale-in delay-1 ${inViewServices ? 'is-visible' : ''}`}>
                            <div className="service-icon-wrapper">
                                <FaCode className="service-icon" /> {/* Ícono de React Icons */}
                            </div>
                            <h3>Desarrollo Web a Medida</h3>
                            <p>Creamos sitios web y aplicaciones robustas y escalables, adaptadas 100% a tus necesidades específicas.</p>
                            <Link to="/servicios#desarrollo-web" className="btn btn-outline-primary service-card-link">Saber Más</Link>
                        </div>
                    </Col>

                    {/* Tarjeta de Servicio 2: Diseño UX/UI */}
                    <Col xs={12} sm={6} lg={4}>
                        <div className={`service-card animate-on-scroll scale-in delay-2 ${inViewServices ? 'is-visible' : ''}`}>
                            <div className="service-icon-wrapper">
                                <FaLightbulb className="service-icon" /> {/* Otro ícono de React Icons */}
                            </div>
                            <h3>Diseño UX/UI Impactante</h3>
                            <p>Diseños intuitivos y atractivos que garantizan una experiencia de usuario memorable y eficaz para tus visitantes.</p>
                            <Link to="/servicios#diseno-ux-ui" className="btn btn-outline-primary service-card-link">Saber Más</Link>
                        </div>
                    </Col>

                    {/* Tarjeta de Servicio 3: Marketing Digital & SEO */}
                    <Col xs={12} sm={6} lg={4}>
                        <div className={`service-card animate-on-scroll scale-in delay-3 ${inViewServices ? 'is-visible' : ''}`}>
                            <div className="service-icon-wrapper">
                                <FaChartLine className="service-icon" /> {/* Otro ícono de React Icons */}
                            </div>
                            <h3>Marketing Digital & SEO</h3>
                            <p>Estrategias probadas para aumentar tu visibilidad, atraer tráfico de calidad y convertir visitantes en clientes.</p>
                            <Link to="/servicios#marketing-digital" className="btn btn-outline-primary service-card-link">Saber Más</Link>
                        </div>
                    </Col>
                </Row>
                <div className="text-center mt-5">
                    {/* Botón para ver todos los servicios, con animación escalonada */}
                    <Link to="/servicios" className={`btn btn-primary btn-lg custom-button-style animate-on-scroll slide-up delay-4 ${inViewServices ? 'is-visible' : ''}`}>Ver Todos los Servicios</Link>
                </div>
            </Container>

            {/* --- Sección de Testimonios - Genera confianza con prueba social --- */}
            <Container fluid className="my-5 testimonials-section py-5" ref={refTestimonials}> {/* `Container fluid` para ocupar todo el ancho */}
                <h2 className={`text-center mb-5 section-title animate-on-scroll slide-up ${inViewTestimonials ? 'is-visible' : ''}`}>Lo que Dicen Nuestros Clientes</h2>
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        <div className={`testimonial-card animate-on-scroll scale-in delay-1 ${inViewTestimonials ? 'is-visible' : ''}`}>
                            <FaQuoteLeft className="quote-icon mb-3" /> {/* Ícono de comillas */}
                            <p className="testimonial-text">"Powa Digital Services transformó nuestra presencia online. Su equipo es increíblemente profesional, atento y superó todas nuestras expectativas. ¡Muy recomendados para cualquier proyecto digital!"</p>
                            <p className="testimonial-author">- Ana Gómez, CEO de InnovaTech</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* --- Sección de Llamada a la Acción (CTA) Final --- */}
            <Container fluid className="final-cta-section text-center py-5" ref={refCtaFinal}> {/* `Container fluid` para ocupar todo el ancho */}
                <h2 className={`final-cta-section-title animate-on-scroll slide-up ${inViewCtaFinal ? 'is-visible' : ''}`}>¿Listo para Impulsar tu Negocio?</h2>
                <p className={`lead final-cta-section-lead animate-on-scroll slide-up delay-1 ${inViewCtaFinal ? 'is-visible' : ''}`}>Contáctanos hoy mismo y comencemos a construir tu éxito digital.</p>
                <Link to="/contact" className={`btn btn-light btn-lg final-cta-button animate-on-scroll slide-up delay-2 ${inViewCtaFinal ? 'is-visible' : ''}`}>Pide tu Presupuesto Gratis</Link>
            </Container>
        </>
    );
};

export default HomePage;