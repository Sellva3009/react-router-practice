import React from 'react'
import { useNavigate } from 'react-router-dom'
import Auth from '../Auth';

const Login = () => {
    let navigate = useNavigate();

    const login = () => {
        Auth.authenticate();
        navigate('/dashboard');
    }

    return (
        <div>
            <h2>Login</h2>
            <button onClick={login}>Log in</button>
        </div>
    )
}

export default Login