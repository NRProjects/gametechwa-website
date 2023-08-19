import React, { useState } from 'react';
import { BACKEND_URL } from './util';
import './Login.css';
import { useUser } from '../UserContext';

function Login() {
    const { setUser } = useUser();

    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCredentials(prevState => ({ ...prevState, [name]: value }));
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        const { email, password } = credentials;
        if (!email || !password) {
            setErrorMessage('Please enter email and password');
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            const userData = { email };

            localStorage.setItem('user', JSON.stringify(userData));

            setUser(data);

            alert('Login successful');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className='login-page-container' onSubmit={handleLogin}>
            <form className='login-box-container'>
                <label className='login-box-label'>Email</label>
                <input
                    className='login-box-input'
                    name='email'
                    value={credentials.email}
                    onChange={handleChange}
                />

                <label className='login-box-label'>Password</label>
                <input 
                    className='login-box-input'
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />

                <button type='submit' className='login-box-button'>LOGIN</button>
                <button className='login-box-button'>FORGOT PASSWORD</button>
            </form>
        </div>
    );
}

export default Login;