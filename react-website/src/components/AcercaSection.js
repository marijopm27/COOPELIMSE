// Acerca.js
import React from 'react';

const Acerca = () => {
  return (
    <section id="acerca" className="acerca container">
      <div className="acerca-start">
        <h1 className="section-title">Nuestra Cooperativa</h1>
        <br />
        <p>
          La Cooperativa de Limpieza, Mantenimiento Vial Seguridad y Servicios Múltiples de Responsabilidad Limitada (COOPELIMSE R.L.)
        </p>
        <br />
        <p>
          Nosotros somos una cooperativa para atender diversos servicios en las cercanías de Cartago. Conozca nuestros valores y aspiraciones:
        </p>
      </div>
      <div className="acerca-end">
        <div className="acerca-item">
          <h2>Misión</h2>
          <p>
            Brindar servicios de limpieza, mantenimiento vial y seguridad de alta calidad a nuestros clientes, contribuyendo a un entorno más limpio, seguro y funcional para la comunidad. Nos comprometemos a proporcionar soluciones integrales y sostenibles mientras promovemos la cooperación y el bienestar de nuestros socios trabajadores.
          </p>
        </div>
        {/* Inserta imágenes y otros elementos del acerca según sea necesario */}
      </div>
    </section>
  );
}

export default Acerca;
