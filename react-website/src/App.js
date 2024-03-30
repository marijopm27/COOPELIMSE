import React from 'react';
import NavBar from './NavBar';
import InicioSection from './InicioSection';
import AcercaSection from './AcercaSection';
import './styles.css';

function App() {
    return (
        <div>
            <NavBar />
            <InicioSection />
            <AcercaSection />
            {/* Add other sections as needed */}
        </div>
    );
}

export default App;
