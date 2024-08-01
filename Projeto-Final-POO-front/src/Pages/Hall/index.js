import React, { useEffect, useState } from 'react';
import icon from './img/profile.png';
import logo from './img/logo1.png';
import { Link } from 'react-router-dom';
import './hall.css';

function Hall() {
    const [person, setPerson] = useState(null);
    const [error, setError] = useState('');
    const email = localStorage.getItem('userEmail');

    useEffect(() => {
        const fetchPersonData = async () => {
            if (!email) {
                setError('Usuário não está autenticado.');
                return;
            }

            try {
                const response = await fetch(`http://localhost:8080/auth/person?email=${email}`);

                if (response.ok) {
                    const data = await response.json();
                    setPerson(data);
                    setError('');
                } else {
                    setError('Não foi possível obter os dados da pessoa.');
                }
            } catch (error) {
                setError('Erro ao buscar dados da pessoa.');
            }
        };

        fetchPersonData();
    }, [email]);

    return (
        <div className="App">
            <header className="header">
                <img src={logo} alt="Logo" className="logo" />
            </header>
            <main>
                <div className="left-column">
                    <div className="person-info">
                        <img src={icon} alt="Foto da Pessoa" className="person-icon" />
                        {person ? (
                            <ul>
                                <li>Nome: {person.name}</li>
                                <li>Peso: {person.weigth} kg</li>
                                <li>Altura: {person.height} m</li>
                                <li>Idade: {person.age} anos</li>
                            </ul>
                        ) : (
                            <p>Carregando...</p>
                        )}
                    </div>
                    <Link to="/editar" className="button">Editar</Link>
                </div>
                <div className="right-column">
                    <Link to="/enderecos" className="button">Endereços</Link>
                    <Link to="/info" className="button">Informações</Link>
                </div>
            </main>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Hall;
