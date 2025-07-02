Agencia Digital Powa - Servicios Digitales
¡Bienvenido al repositorio de la aplicación web de Agencia Digital Powa!

Este proyecto alberga la interfaz de usuario (frontend) de nuestra plataforma, desarrollada con React y Vite, que muestra nuestros servicios digitales, portafolio y permite a los clientes contactarnos de forma eficiente.

🚀 Tecnologías Utilizadas
Este proyecto está construido con las siguientes tecnologías clave:

Interfaz:

React: Una biblioteca de JavaScript para construir interfaces de usuario interactivas.

Vite: Un bundler de próxima generación para un desarrollo frontend más rápido y optimizado.

React Router Dom: Para la navegación y el manejo de rutas en la aplicación.

React Bootstrap: Componentes UI de Bootstrap adaptados para React, para un diseño responsivo y atractivo.

React Hook Form: Para la gestión de formularios con validación eficiente.

React Toastify: Para notificaciones "toast" personalizables.

React Helmet Async: Para la gestión de metadatos del documento (SEO).

React Icons: Para íconos vectoriales personalizables.

Gestión de Formularios:

Formspree: Servicio de backend para el envío de formularios de contacto.

✨ Características Principales
Páginas Informativas: Secciones dedicadas a "Inicio", "Nosotros", "Servicios", "Portafolio" y "Contacto".

Formulario de Contacto Dinámico: Permite a los usuarios seleccionar servicios de interés y proporciona campos condicionales (método de uso, presupuesto) según la selección.

Diseño Responsivo: Adaptado para una excelente experiencia de usuario en cualquier dispositivo (móviles, tablets, escritorio).

Optimización SEO Básica: Uso de react-helmet-async para metadatos en cada página.

Notificaciones al Usuario: Feedback visual mediante "toasts" para el envío de formularios.

🛠️ Configuración y Desarrollo Local
Para poner en marcha este proyecto en tu entorno local, seguí estos pasos:

Clonar el Repositorio:

Intento

git clone https://github.com/CristianMarcus/AgenciaDigitalPowa.git
Navegar al Directorio del Proyecto:

Intento

cd AgenciaDigitalPowa
# Si tu código está en una subcarpeta como 'ServiciosDigitales', navega a ella:
# cd ServiciosDigitales
Instalar Dependencias:

Intento

npm install
# o si usas yarn:
# yarn install
Configurar Variables de Entorno:
Crea un archivo .env en la raíz de tu proyecto (la misma carpeta que package.json).
Añadí la URL de tu formulario de Formspree:

Fragmento de código

VITE_FORMSPREE_URL=https://formspree.io/f/tu_ID_de_formulario
¡Importante: Reemplazá tu_ID_de_formulario con el ID real de tu formulario de Formspree.

Iniciar el Servidor de Desarrollo:

Intento

npm run dev
# o si usas yarn:
# yarn dev
Esto iniciará la aplicación en modo desarrollo, generalmente accesible en http://localhost:5173 (o un puerto similar).

📦 Construcción para Producción
Para generar una versión optimizada y lista para desplegar:

Intento

npm run build
# o si usas yarn:
# yarn build
Esto creará una carpeta dist (o build) en la raíz de tu proyecto, que contiene los archivos estáticos listos para ser servidos por un servidor web (como Firebase Hosting, Netlify, Vercel, etc.).

🌐 Despliegue
Este proyecto está diseñado para ser desplegado fácilmente en plataformas de hosting de sitios estáticos como:

Firebase Hosting (recomendado para integración con un posible backend Firebase/Node.js en el futuro).

Netlify

Vercel

Páginas de GitHub

Consultá la documentación de tu proveedor de hosting preferido para los pasos específicos de despliegue de una aplicación Vite/React.

🤝 Contribuciones
Las contribuciones son bienvenidas. Si encontrás un error o tenés una sugerencia de mejora, por favor, abrí un "Issue" o enviá un "Pull Request".

📄 Licencia
Este proyecto está bajo la Licencia MIT.


📞 Contacto
Para consultas comerciales o soporte, podés contactarnos a través de nuestro sitio web o directamente en:

Correo electrónico: cristianmarcus34@gmail.com

Teléfono/WhatsApp: +54 9 11 2688-4940

