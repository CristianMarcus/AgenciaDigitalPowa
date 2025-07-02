// src/components/LoadingScreen/LoadingScreen.jsx
import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingScreen.css'; // ¡Importante: aquí se importa el CSS!

const LoadingScreen = () => {
  return (
    <div className="loading-screen-container">
      <div className="loading-content">
        {/* Tu logo SVG o cualquier otra imagen/icono que desees */}
        {/* Este es un SVG de ejemplo para "Powa" - puedes reemplazarlo con tu logo real */}
        <svg className="loading-logo" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ejemplo de un icono de energía/poder/rayo */}
          <path d="M11 20V14H6L13 4V10H18L11 20Z" fill="#ffc107"/> {/* Rayo amarillo */}
          <circle cx="12" cy="12" r="10" stroke="#6a0dad" strokeWidth="2"/> {/* Contorno púrpura */}
        </svg>

        <h2 className="loading-text">Powa Digital Services</h2>
        <Spinner animation="border" variant="warning" className="mt-4" /> {/* Usamos 'warning' para el amarillo */}
        <p className="loading-message">Cargando tu experiencia digital...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;