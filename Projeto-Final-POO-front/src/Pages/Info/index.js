import React from 'react';
import logo from './img/logo.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import youtube from './img/youtube.png';
import './info.css'

export default function InformacoesSobreDoacao() {
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

            <main className="info-container">
                <h1>Informações sobre a Doação de Sangue</h1>
                <ul>
                    <li>Estar bem de saúde e ter entre 18 e 69 anos. Jovens a partir dos 16 anos já podem doar caso tenham autorização do responsável.</li>
                    <li>Não estar em jejum.</li>
                    <li>Ter dormido pelo menos seis horas nas últimas 24 horas.</li>
                    <li>Pesar mais de 50kg.</li>
                    <li>Não ter feito cirurgia de grande porte a menos de seis meses e de pequeno porte a menos de três meses.</li>
                    <li>Não ter feito tratamento dentário a menos de 7 dias.</li>
                    <li>Não estar grávida ou amamentando (mães que amamentam devem aguardar a criança completar 12 meses de vida). Em caso de parto normal, aguardar 3 meses; se cesariana, aguardar 6 meses.</li>
                    <li>Não estar gripado ou ter tido febre nos últimos 7 dias.</li>
                    <li>Não ter diabetes, cardiopatia e nem ter contraído hepatite após os 11 anos de idade.</li>
                    <li>Caso tenha tomado vacina contra gripe, deve-se aguardar 48h; as demais vacinas com bactérias/vírus vivos, por exemplo sarampo e febre amarela, deve-se aguardar 4 semanas.</li>
                    <li>Não ter doado sangue a menos de 60 dias (homens) e 90 dias (mulheres).</li>
                    <li>Não ter tido comportamento de risco para contaminação pelo HIV.</li>
                    <li>Não ter ingerido álcool nas 12 horas antes da doação.</li>
                    <li>Não ter feito uso de drogas injetáveis ilícitas.</li>
                    <li>Não ter feito piercing, acupuntura ou tatuagem a menos de 12 meses.</li>
                    <li>Não ter feito endoscopia ou colonoscopia nos últimos seis meses.</li>
                </ul>
            </main>
        </div>
    );
}
