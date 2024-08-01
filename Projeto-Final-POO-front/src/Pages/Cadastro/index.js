import React, { useState } from 'react';
import logo from './img1/logo1.png';
import { useNavigate } from 'react-router-dom';
import './cadastro.css';

function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook para navegação

    const handleSubmit = async (event) => {
        event.preventDefault();

        const registerDto = {
            email,
            senha: password,
            nome: name,
            documento: cpf,
            endereco: address,
            telefone: phone,
            // Supondo que `peso`, `altura` e `idade` são opcionais ou podem ser definidos como valores padrão
            peso: null,
            altura: null,
            idade: null
        };

        try {
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerDto),
            });

            if (response.ok) {
                // Armazena o email no localStorage
                localStorage.setItem('userEmail', email);
                setError('');
                navigate('/hall'); // Redireciona para a página /hall após cadastro bem-sucedido
            } else {
                setError('Erro ao cadastrar. Verifique os dados e tente novamente.');
            }
        } catch (error) {
            setError('Erro ao comunicar com o servidor.');
        }
    };

    return (
        <div className="App">
            <header>
                <img src={logo} alt="Logo" className="logo" />
            </header>
            <main>
                <div className="auth-container">
                    <h2>Cadastrar</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpf">CPF</label>
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Endereço</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="button">Cadastrar</button>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </main>
        </div>
    );
}

export default Cadastro;
