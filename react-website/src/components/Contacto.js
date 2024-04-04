// Contacto.js
import React from 'react';

const Contacto = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Aquí puedes hacer lo que necesites con los datos del formulario
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contacto container">
        <div className="contact-form-column">
          <form 
            id="contactForm" 
            name="contactForm"
            className="contact-form"
            onSubmit={handleSubmit}
            action="/index.html"
          >
            <h1 className="section-title">Contáctenos</h1>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Apellido</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <textarea id="description" name="description" rows="4" required></textarea>
            </div>
            <button type="submit" name="sendButton">Enviar</button>
          </form>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62895.26812247124!2d-83.96638938269471!3d9.854204852289108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0df1021af2921%3A0xb5e5548558a39c52!2sProvincia%20de%20Cartago%2C%20Cartago!5e0!3m2!1ses-419!2scr!4v1698534489022!5m2!1ses-419!2scr" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contacto;
