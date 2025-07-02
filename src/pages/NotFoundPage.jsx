// src/pages/NotFoundPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <Container className="text-center my-5 py-5">
      <Helmet>
        <title>404 - Página No Encontrada | Powa Digital Services</title>
        <meta name="description" content="La página que estás buscando no existe en Powa Digital Services." />
      </Helmet>
      <FaExclamationTriangle size="5em" color="var(--accent-color)" className="mb-4" />
      <h1 className="display-4">404 - Página No Encontrada</h1>
      <p className="lead">Lo sentimos, la página que estás buscando no existe.</p>
      <Button as={Link} to="/" variant="primary" size="lg" className="mt-4">
        Volver a Inicio
      </Button>
    </Container>
  );
};

export default NotFoundPage;