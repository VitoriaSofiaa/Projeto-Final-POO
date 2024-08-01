import React, { useState } from 'react';
import logo from './img2/logo1.png';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook para navegação

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginDto = {
            email,
            senha: password
        };

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginDto),
            });

            if (response.ok) {
                // Armazena o email no localStorage
                localStorage.setItem('userEmail', email);
                setError('');
                navigate('/hall'); // Redireciona para a página /hall após login bem-sucedido
            } else {
                setError('Credenciais inválidas');
            }
        } catch (error) {
            setError('Erro ao fazer login');
        }
    };

    return (
        <div className="App">
            <header>
                <img src={logo} alt="Logo" className="logo" />
            </header>
            <main>
                <div className="auth-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="button">Entrar</button>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </main>
        </div>
    );
}

export default Login;
