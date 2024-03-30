import React from 'react';

function InicioSection() {
    return (
        <section id="inicio">
            <div className="inicio container">
                <div>
                    <h1>Bienvenidos a COOPELIMSE R.L</h1>
                    <a href="#acerca" type="button" className="boton">Conócenos</a>
                </div>
            </div>
            <div className="shape-divider">
                {/* SVG shape divider */}
            </div>
        </section>
    );
}

export default InicioSection;
