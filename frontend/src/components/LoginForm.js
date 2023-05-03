import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function LoginForm({ login }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        login(formData);
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;
