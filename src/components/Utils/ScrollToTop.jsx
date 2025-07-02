// src/components/Utils/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // `useLocation` de react-router-dom te da información sobre la URL actual.
  // Desestructuramos `pathname` para obtener la parte de la ruta (por ejemplo, "/servicios").
  const { pathname } = useLocation();

  // `useEffect` se ejecuta cuando el componente se monta y cada vez que sus dependencias cambian.
  useEffect(() => {
    // `window.scrollTo` desplaza la ventana del navegador a una posición específica.
    // `top: 0` significa que va al principio de la página.
    // `behavior: 'smooth'` es opcional, pero hace que el scroll sea suave y no un salto brusco.
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]); // <-- ¡IMPORTANTE! Este efecto se re-ejecuta cada vez que `pathname` cambia.

  // Este componente no necesita renderizar nada visual, por eso devuelve `null`.
  return null;
};

export default ScrollToTop;