import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const [formdata, setFormdata] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value }); // Correctly set form data
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.post(`http://127.0.0.1:8000/login/`, formdata);
            console.log('Login successful:', response.data);
            navigate('/recipe'); // Navigate to home page upon successful login
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <div className='holder'>
            <div className='head'>
                <div className='text'>WELCOME BACK!</div>
                <div className='underline'></div>
            </div>
            <form className='fields' onSubmit={handleSubmit}> {/* Corrected here */}
                <div className='field'>
                    <label>username</label>
                    <input type='text' name='username' value={formdata.username} onChange={handleChange} />
                </div>
                <br/>
                <div className='field'>
                    <label>password</label>
                    <input type='password' name='password' value={formdata.password} onChange={handleChange} />
                </div>
                
                <div className='press-container'>
                    <button type='submit' className='press'>Login</button> {/* Change to button for submission */}
                </div>
            </form>
        </div>
    );
}

export default Login;
