import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './img/logo.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import youtube from './img/youtube.png';
import './editar.css';

export default function EditarInformacoes() {
    const [formData, setFormData] = useState({
        nome: '',
        peso: '',
        altura: '',
        idade: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const email = localStorage.getItem('userEmail'); // Obtém o email do localStorage

    useEffect(() => {
        // Função para buscar dados do usuário e preencher o formulário
        const fetchPersonData = async () => {
            if (!email) {
                setError('Usuário não está autenticado.');
                return;
            }

            try {
                const response = await fetch(`http://localhost:8080/auth/person?email=${email}`);
                if (response.ok) {
                    const data = await response.json();
                    setFormData({
                        nome: data.name || '',
                        peso: data.weigth || '',
                        altura: data.height || '',
                        idade: data.age || ''
                    });
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const editDto = {
            idade: formData.idade,
            altura: formData.altura,
            peso: formData.peso,
        };

        try {
            const response = await fetch('http://localhost:8080/auth/edit?email=' + email, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editDto)
            });

            if (response.ok) {
                setError('');
                navigate('/hall'); // Redireciona para /hall
            } else {
                setError('Erro ao atualizar as informações.');
            }
        } catch (error) {
            setError('Erro ao comunicar com o servidor.');
        }
    };

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

            <main className="edit-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            disabled={true}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="peso">Peso (kg):</label>
                        <input
                            type="number"
                            id="peso"
                            name="peso"
                            value={formData.peso}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="altura">Altura (cm):</label>
                        <input
                            type="number"
                            id="altura"
                            name="altura"
                            value={formData.altura}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idade">Idade:</label>
                        <input
                            type="number"
                            id="idade"
                            name="idade"
                            value={formData.idade}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Salvar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </main>
        </div>
    );
}
