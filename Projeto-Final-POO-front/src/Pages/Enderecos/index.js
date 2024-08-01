import React from 'react';
import logo from './img/logo.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import youtube from './img/youtube.png';
import iconEnd from './img/iconEnd.png';
import './enderecos.css'

export default function Enderecos() {
    // URLs do Google Maps para cada hospital
    const hospitalLinks = [
        'https://maps.app.goo.gl/ZeQzSAPDAAX9bApa6',
        'https://maps.app.goo.gl/QWih8YSaJuGSoTFLA',
        'https://maps.app.goo.gl/MjzHRUYEZedTJtLc8',
        'https://maps.app.goo.gl/J3vJN5UBPbikdBh78',
        'https://maps.app.goo.gl/wsAEHyjpdbJtmDHz7',
    ];

    return (
        <div className="App">
            <header>
                <img src={logo} alt="Logo" className="logo" />
                <div className="social-icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="YouTube" />
                    </a>
                </div>
            </header>

            <main className="container">
                {hospitalLinks.map((link, index) => (
                    <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="hospital-button">
                        <img src={iconEnd} alt="Ícone do Hospital" className="icon" />
                        <span>Hospital {String.fromCharCode(65 + index)}</span>
                    </a>
                ))}
            </main>
        </div>
    );
}
