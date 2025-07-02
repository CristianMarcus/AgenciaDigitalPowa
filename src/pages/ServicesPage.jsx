// src/pages/ServicesPage.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLaptopCode, FaShoppingCart, FaTools, FaSearchDollar, FaPaintBrush, FaLightbulb, FaMobileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../styles/ServicesPage.css'; // Your Services CSS

// --- ServiceCardItem Component ---
// Añadimos una prop 'delay' para controlar la animación individual de cada tarjeta
const ServiceCardItem = ({ icon, title, description, fullDescription, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false); // Para controlar la visibilidad del texto completo

  // Función para manejar la expansión/contracción
  const toggleExpanded = () => {
    if (!isExpanded) {
      // Cuando se expande, muestra el contenido completo inmediatamente para que la altura se ajuste
      setShowFullContent(true);
    } else {
      // Cuando se contrae, permite que la animación de altura suceda antes de ocultar el contenido
      // Puedes ajustar este delay si la animación de altura es más larga
      setTimeout(() => setShowFullContent(false), 300); // Pequeño retraso para que la animación de la tarjeta sea visible
    }
    setIsExpanded(!isExpanded);
  };

  // Lógica para determinar si el botón "Ver Más" debe mostrarse
  const hasFullDescription = fullDescription && fullDescription.length > description.length;
  const initialSnippetLength = 150; // Ajusta este número según necesites un snippet más largo o corto
  const isDescriptionTooLong = description.length > initialSnippetLength;

  const displayedSnippet = isDescriptionTooLong && !isExpanded
    ? description.substring(0, initialSnippetLength) + '...'
    : description;

  return (
    <Card className={`service-card shadow-sm ${isExpanded ? 'expanded' : ''}`}
          style={{ animationDelay: `${delay}s` }}> {/* Aplica el delay aquí */}
      <div className="service-icon mb-3">
        {icon}
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="card-description-content">
          {displayedSnippet}
        </Card.Text>

        {/* Solo renderizamos el contenido completo si está expandido Y es necesario */}
        {isExpanded && (hasFullDescription || isDescriptionTooLong) && (
          <Card.Text className={`card-full-description-content mt-2 ${showFullContent ? 'show' : ''}`}>
            {fullDescription || description} {/* Muestra fullDescription si existe, si no, la description completa */}
          </Card.Text>
        )}

        {/* Mostrar el botón "Ver Más" si la descripción inicial es muy larga o si hay una descripción completa separada */}
        {(isDescriptionTooLong || hasFullDescription) ? (
          <Button variant="link" onClick={toggleExpanded} className="read-more-btn mt-auto">
            {isExpanded ? (
              <>Ver Menos <FaChevronUp className="ms-1" /></>
            ) : (
              <>Ver Más <FaChevronDown className="ms-1" /></>
            )}
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  );
};

// --- ServicesPage Component ---
const ServicesPage = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Desarrollo Web Personalizado",
      description: "Creamos sitios web únicos y a medida, desde landing pages hasta complejas aplicaciones web, optimizados para tus necesidades específicas y objetivos de negocio.",
      fullDescription: "En Powa, diseñamos y desarrollamos soluciones web personalizadas que se adaptan perfectamente a tu visión. Ya sea un sitio corporativo, un blog, o una aplicación web compleja, utilizamos las últimas tecnologías para asegurar escalabilidad, seguridad y un rendimiento óptimo. Nos enfocamos en un código limpio y una arquitectura robusta para que tu plataforma crezca contigo. Ofrecemos desde el diseño UI/UX hasta la implementación backend y el despliegue."
    },
    {
      icon: <FaMobileAlt />,
      title: "Diseño Web Responsivo y UX/UI",
      description: "Diseños intuitivos y atractivos que garantizan una experiencia de usuario excepcional en cualquier dispositivo (ordenadores, tablets y móviles) y una interfaz fácil de usar.",
      fullDescription: "La experiencia de usuario (UX) y la interfaz de usuario (UI) son cruciales para el éxito digital. En Powa, creamos diseños que no solo son visualmente impactantes, sino también funcionales y fáciles de navegar. Nos aseguramos de que tu sitio se vea y funcione impecablemente en cualquier pantalla, desde ordenadores de escritorio hasta los smartphones más pequeños, garantizando una interacción fluida para todos tus visitantes. Nuestro proceso incluye investigación de usuario, wireframing, prototipado y pruebas de usabilidad."
    },
    {
      icon: <FaShoppingCart />,
      title: "Soluciones E-commerce Completas",
      description: "Implementamos tiendas online robustas y seguras, gestionando desde catálogos de productos hasta pasarelas de pago, para que puedas vender sin límites.",
      fullDescription: "Lleva tu negocio al siguiente nivel con una tienda online profesional y segura. Desde la configuración inicial hasta la integración de pasarelas de pago y sistemas de gestión de inventario, te ofrecemos soluciones de e-commerce personalizadas. Gestiona tus productos, procesa pedidos y ofrece una experiencia de compra sin fricciones a tus clientes, aumentando tus ventas y tu alcance en el mercado digital. Trabajamos con plataformas como Shopify, WooCommerce o desarrollos a medida."
    },
    {
      icon: <FaTools />,
      title: "Mantenimiento y Soporte Web",
      description: "Ofrecemos servicios de mantenimiento continuo, actualizaciones de seguridad, copias de respaldo y soporte técnico para asegurar que tu sitio funcione sin interrupciones.",
      fullDescription: "Un sitio web requiere atención constante para funcionar a la perfección. Nuestro servicio de mantenimiento y soporte garantiza que tu plataforma esté siempre actualizada, segura y optimizada. Realizamos copias de seguridad regulares, monitoreamos el rendimiento y aplicamos las últimas actualizaciones para proteger tu sitio de vulnerabilidades y asegurar su disponibilidad 24/7, permitiéndote enfocarte en tu negocio. Incluye monitoreo, parches de seguridad y resolución de incidencias."
    },
    {
      icon: <FaSearchDollar />,
      title: "Optimización SEO (Básico)",
      description: "Mejoramos la visibilidad de tu sitio en los motores de búsqueda mediante optimizaciones técnicas y de contenido, atrayendo más tráfico orgánico a tu plataforma.",
      fullDescription: "Una buena estrategia SEO es fundamental para que tus clientes te encuentren. Ofrecemos servicios de optimización básica que incluyen la investigación de palabras clave, la optimización de contenido y la mejora de la estructura técnica de tu sitio. Nuestro objetivo es aumentar tu ranking en los motores de búsqueda, atraer tráfico orgánico de calidad y convertir visitantes en clientes leales. Nos enfocamos en SEO On-Page, optimización de meta descripciones, títulos y contenido relevante."
    },
    {
      icon: <FaPaintBrush />,
      title: "Diseño Digital y Gráfico",
      description: "Desarrollamos una identidad visual impactante para tu marca, incluyendo logotipos, banners, y elementos gráficos que resuenen con tu audiencia.",
      fullDescription: "La imagen de tu marca es tu primera impresión. Creamos diseños digitales y gráficos que capturan la esencia de tu negocio y lo comunican de manera efectiva. Desde logotipos memorables y paletas de colores distintivas hasta banners publicitarios y materiales gráficos para redes sociales, construimos una identidad visual coherente y profesional que dejará una impresión duradera en tu audiencia. Creamos manuales de marca completos y garantizamos la consistencia visual."
    },
    {
      icon: <FaLightbulb />,
      title: "Consultoría Digital Estratégica",
      description: "Te asesoramos en la planificación y ejecución de tu estrategia digital, identificando oportunidades y soluciones tecnológicas para impulsar tu crecimiento online.",
      fullDescription: "El panorama digital está en constante evolución, y te ayudamos a navegarlo. Nuestra consultoría digital estratégica te brinda la guía experta para definir tus objetivos online, identificar las herramientas y plataformas más adecuadas, y trazar un plan de acción claro y medible. Te acompañamos en cada etapa para asegurar que tus inversiones digitales generen el máximo retorno y posicionen tu negocio para el éxito a largo plazo. Ofrecemos análisis de mercado, definición de KPIs y roadmap tecnológico."
    },
  ];

  useEffect(() => {
    // Si estás usando una librería de animaciones como AOS (Animate On Scroll),
    // asegúrate de inicializarla en tu App.js o index.js y refrescarla aquí si es necesario.
    // console.log("ServicesPage se ha montado o actualizado. Verificando estilos de las tarjetas...");
    // AOS.refresh(); // Descomentar si usas AOS
  }, []);

  return (
    <Container className="my-5 services-page-container"> {/* Agregamos una clase para estilos generales de la página */}
      <Helmet>
        <title>Nuestros Servicios | Agencia Digital Powa</title>
        <meta name="description" content="Descubre la gama de servicios de desarrollo y diseño web que ofrecemos: sitios web, e-commerce, SEO y más." />
      </Helmet>

      <h1 className="text-center services-title-gradient">Nuestros Servicios</h1>
      <p className="services-lead-text text-center">
        En Agencia Digital Powa, transformamos tus ideas en soluciones digitales eficientes y atractivas. Ofrecemos una gama completa de servicios para potenciar tu presencia online y alcanzar tus objetivos.
      </p>

      <Row className="g-4 justify-content-center">
        {services.map((service, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4}>
            <ServiceCardItem
              icon={service.icon}
              title={service.title}
              description={service.description}
              fullDescription={service.fullDescription}
              delay={0.1 * index} // Retraso incremental para cada tarjeta
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;