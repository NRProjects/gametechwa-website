import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        if (!username || !password) {
            alert("Invalid credentials");
            return;
        }

        alert('Valid credentials');
    };

    return (
        <div className='login-page-container' onSubmit={handleLogin}>
            <form className='login-box-container'>
                <label className='login-box-label'>
                    Email
                </label>
                <input className='login-box-input' value={username} onChange={(e) => setUsername(e.target.value)}/>

                <label className='login-box-label'>
                    Password
                </label>
                <input type='password' className='login-box-input' value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button type='submit' className='login-box-button'>LOGIN</button>
                <button className='login-box-button'>FORGOT PASSWORD</button>

                
            </form>
        </div>
    );
}

export default Login;