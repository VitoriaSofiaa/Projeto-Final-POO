import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import youtube from './img/youtube.png';
import doacaoModelo from './img/doaçãoModelo.jpg';
import './home.css';

function Home() {
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
            <main>
                <div className="left-column">
                    <img src={doacaoModelo} alt="Imagem Descritiva" />
                    <p>Nossa missão é salvar vidas conectando doadores de sangue a bancos de sangue e hospitais de Goiânia e região que precisam urgentemente de doações. Sabemos que a doação de sangue é um ato de amor e solidariedade que pode fazer a diferença na vida de muitos pacientes. Por isso, criamos uma plataforma intuitiva e acessível para tornar esse processo mais fácil e conveniente para todos.</p>
                    <p>Com o Banco de Sangue, você pode:</p>
                    <ul>
                        <li>Encontrar Ponto de Doação Próximo: Verifique onde possui uma unidade mais próxima da sua região.</li>
                        <li>Receber Notificações: Fique informado sobre campanhas de doação e necessidades urgentes de sangue na sua região.</li>
                        <li>Verificar pré-requisitos para a doação: Verifique se você está adequado em realizar a doação.</li>
                    </ul>
                    <p>Doe sangue, doe vida! Junte-se a nós e faça parte dessa corrente do bem. Baixe o aplicativo agora e comece a transformar vidas com um simples gesto.</p>
                </div>
                <div className="right-column">
                <Link to="/Login" className="button">Login</Link>
                <Link to="/Cadastro" className="button">Cadastrar</Link>
                    
                    <div className="testimonial">
                        <h3>Depoimentos</h3>
                        <p>"Doar sangue foi uma experiência incrível, saber que ajudei a salvar vidas me faz sentir realizado!" - João</p>
                    </div>
                    
                    <div className="statistics">
                        <h3>Estatísticas</h3>
                        <p><strong>500+</strong> vidas salvas</p>
                        <p><strong>2000+</strong> litros de sangue doados</p>
                    </div>
                    
                    <div className="upcoming-campaigns">
                        <h3>Próximas Campanhas</h3>
                        <p>Campanha de Doação no Centro de Goiânia - 15 de Agosto</p>
                    </div>
                    
                    <div className="faqs">
                        <h3>FAQs</h3>
                        <p><strong>Quem pode doar sangue?</strong></p>
                        <p>Pessoas entre 18 e 65 anos, com boa saúde, que pesam mais de 50kg.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
