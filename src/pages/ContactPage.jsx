// src/pages/ContactPage.jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'react-toastify';

import '../styles/ContactPage.css';

const ContactPage = () => {
  const { register, handleSubmit, reset, control, setValue, unregister, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      services: [],
    }
  });

  const FORMSPREE_URL = 'https://formspree.io/f/mzzgoaon';

  const selectedServices = useWatch({
    control,
    name: 'services',
    defaultValue: [],
  });

  const servicesToHideUsageAndBudget = ['Consultoría SEO', 'Diseño UI/UX', 'Marketing Digital', 'Mantenimiento y Soporte Web', 'Otros'];

  const shouldShowUsageAndBudget = selectedServices.some(service =>
    service && !servicesToHideUsageAndBudget.includes(service)
  );

  useEffect(() => {
    if (!shouldShowUsageAndBudget) {
      unregister('usageMethod');
      unregister('budget');
      setValue('usageMethod', '');
      setValue('budget', '');
    }
  }, [shouldShowUsageAndBudget, unregister, setValue]);

  const onSubmit = async (data) => {
    const dataToSend = { ...data };

    if (!shouldShowUsageAndBudget) {
      delete dataToSend.usageMethod;
      delete dataToSend.budget;
    }

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        toast.success('🎉 ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        reset();
      } else {
        const result = await response.json();
        const errorMessage = result.error || 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.';
        toast.error(`Ops! ${errorMessage}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.error("Error al enviar el formulario (Formspree):", result);
      }
    } catch (error) {
      toast.error('❌ Error de conexión. Por favor, revisa tu internet e inténtalo de nuevo.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error("Error de conexión o inesperado:", error);
    }
  };

  return (
    <Container className="my-5">
      <Helmet>
        <title>Contacto | Agencia Digital Powa</title>
        <meta name="description" content="Contáctanos para solicitar un presupuesto o para cualquier consulta sobre tus proyectos digitales." />
      </Helmet>

      <h1 className="text-center contact-title-gradient mb-5">Contáctanos</h1>
      <p className="contact-lead-text text-center mb-5">
        ¡Cuéntanos sobre tu proyecto! Selecciona los servicios que te interesan y ayúdanos a entender mejor tus necesidades.
      </p>

      <Row className="justify-content-center">
        {/* Contact Form Column */}
        <Col xs={12} lg={7} className="mb-5 mb-lg-0">
          <div className="contact-form-card shadow-lg p-4 p-md-5">
            <h2 className="text-center mb-4 contact-form-title">Envíanos un Mensaje</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              {/* Name Field */}
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre Completo <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  {...register('name', { required: 'El nombre es obligatorio' })}
                  className={errors.name ? 'is-invalid' : ''}
                  autoComplete="name"
                />
                <div className="text-danger error-message-placeholder" aria-live="polite">
                  {errors.name?.message}
                </div>
              </Form.Group>

              {/* Email Field */}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Correo Electrónico <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  {...register('email', {
                    required: 'El email es obligatorio',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Introduce un email válido (ej: tu@dominio.com)'
                    }
                  })}
                  className={errors.email ? 'is-invalid' : ''}
                  autoComplete="email"
                />
                <div className="text-danger error-message-placeholder" aria-live="polite">
                  {errors.email?.message}
                </div>
              </Form.Group>

              {/* Service of Interest (Checkboxes) */}
              <Form.Group className="mb-4" controlId="formService">
                <Form.Label id="serviceGroupLabel" className={`d-block mb-2 ${errors.services ? 'text-danger' : ''}`}>
                  Servicio de Interés <span className="text-danger">*</span>
                </Form.Label>
                {/* Lista de servicios disponibles */}
                {['Desarrollo Web', 'Diseño UI/UX', 'Marketing Digital', 'Desarrollo Mobile', 'Consultoría SEO', 'Mantenimiento y Soporte Web', 'Otros'].map((service) => (
                  <Form.Check
                    key={service}
                    type="checkbox"
                    id={`service-${service.replace(/\s/g, '-')}`}
                    label={service}
                    value={service}
                    {...register('services', {
                      required: 'Selecciona al menos un servicio de interés'
                    })}
                    aria-describedby="serviceGroupLabel"
                  />
                ))}
                <div className="text-danger error-message-placeholder" aria-live="polite">
                  {errors.services?.message}
                </div>
              </Form.Group>

              {/* Conditionally render Usage Method and Investment Budget */}
              {shouldShowUsageAndBudget && (
                <>
                  {/* Usage Method (Radio Buttons) */}
                  <Form.Group className="mb-4" controlId="formUsageMethod">
                    <Form.Label id="usageMethodGroupLabel" className={`d-block mb-2 ${errors.usageMethod ? 'text-danger' : ''}`}>
                      Método de Uso <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Check
                      type="radio"
                      id="usageMethod-buyApp"
                      label="Comprar App (Licencia Única)"
                      value="Comprar App"
                      {...register('usageMethod', { required: 'Selecciona un método de uso' })}
                      aria-describedby="usageMethodGroupLabel"
                    />
                    <Form.Check
                      type="radio"
                      id="usageMethod-rentApp"
                      label="Alquilar App (Suscripción Mensual/Anual)"
                      value="Alquilar App"
                      {...register('usageMethod', { required: 'Selecciona un método de uso' })}
                      aria-describedby="usageMethodGroupLabel"
                    />
                    <div className="text-danger error-message-placeholder" aria-live="polite">
                      {errors.usageMethod?.message}
                    </div>
                  </Form.Group>

                  {/* Investment Budget (Select) */}
                  <Form.Group className="mb-4" controlId="formBudget">
                    <Form.Label>Presupuesto de Inversión (USD) <span className="text-danger">*</span></Form.Label>
                    <Form.Select
                      aria-label="Selecciona tu presupuesto de inversión"
                      {...register('budget', { required: 'Selecciona un rango de inversión' })}
                      className={errors.budget ? 'is-invalid' : ''}
                      autoComplete="off"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Menos de $1,000">Menos de $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,001 - $10,000">$5,001 - $10,000</option>
                      <option value="$10,001 - $25,000">$10,001 - $25,000</option>
                      <option value="Más de $25,000">Más de $25,000</option>
                      <option value="No estoy seguro/a">No estoy seguro/a</option>
                    </Form.Select>
                    <div className="text-danger error-message-placeholder" aria-live="polite">
                      {errors.budget?.message}
                    </div>
                  </Form.Group>
                </>
              )}

              {/* Message Field */}
              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label>Cuéntanos sobre tu Proyecto / Mensaje <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Describe tu proyecto, ideas o cualquier consulta..."
                  {...register('message', { required: 'El mensaje es obligatorio' })}
                  className={errors.message ? 'is-invalid' : ''}
                  autoComplete="off"
                />
                <div className="text-danger error-message-placeholder" aria-live="polite">
                  {errors.message?.message}
                </div>
              </Form.Group>

              {/* Submit Button with Spinner */}
              <Button
                variant="primary"
                type="submit"
                className="w-100 contact-submit-btn d-flex align-items-center justify-content-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
                )}
              </Button>
            </Form>
          </div>
        </Col>

        {/* Contact Info Column (unchanged) */}
        <Col xs={12} lg={5}>
          <div className="contact-info-card shadow-lg p-4 p-md-5 text-center">
            <h2 className="mb-4 contact-info-title">Información de Contacto</h2>
            <div className="info-item mb-4">
              <FaEnvelope className="info-icon" />
              <p className="mb-0">
                <a href="mailto:cristianmarcus34@gmail.com" className="info-link">cristianmarcus34@gmail.com</a>
              </p>
            </div>
            <div className="info-item mb-4">
              <FaPhoneAlt className="info-icon" />
              <p className="mb-0">
                <a href="tel:+5491126884940" className="info-link">+54 9 11 2688-4940</a>
              </p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p className="mb-0">
                Villa La Florida, Buenos Aires, Argentina
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
