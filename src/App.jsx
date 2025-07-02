// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Estilos para las notificaciones
import ScrollToTop from './components/Utils/ScrollToTop';
// Importa componentes de Layout y Utilidad
import MainLayout from './components/Layout/MainLayout';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

// Importa tus proveedores de contexto (inicialmente solo para el futuro)
// import { AuthProvider } from './context/AuthContext';
// import { ServicesProvider } from './context/ServicesContext';

// Carga perezosa (Lazy Loading) de las páginas
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <HelmetProvider>
        {/* Si tuvieras proveedores de contexto, irían aquí, envolviendo MainLayout */}
        {/* <AuthProvider> */}
        {/* <ServicesProvider> */}
          <MainLayout>
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/servicios" element={<ServicesPage />} /> {/* ¡CAMBIADO: de /services a /servicios ! */}
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Ruta para cualquier otra URL no definida */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </MainLayout>
        {/* </ServicesProvider> */}
        {/* </AuthProvider> */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </HelmetProvider>
    </Router>
  );
}

export default App;