import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
    const [formdata, setFormdata] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    });
    
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value }); // Corrected this line
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://127.0.0.1:8000/register/`, formdata);
            console.log('Form data submitted successfully:', response.data);
            navigate('/login'); // Navigate to login page upon successful registration
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Hello, we are glad to have you join us!</div>
                <div className='underline'></div>
            </div>
            <form className='inputs' onSubmit={handleSubmit}>
                <div className='input'>
                    <label>username</label>
                    <input type='text' name='username' value={formdata.username} onChange={handleChange} />
                </div>
                <br />
                <div className='input'>
                    <label>email</label>
                    <input type='email' name='email' value={formdata.email} onChange={handleChange} />
                </div>
                <br />
                <div className='input'>
                    <label>password</label>
                    <input type='password' name='password' value={formdata.password} onChange={handleChange} />
                </div>
                <div className='input'>
                    <label>password 2</label>
                    <input type='password' name='password2' value={formdata.password2} onChange={handleChange} />
                </div>
                <div className='submit-container'>
                    <button type='submit' className='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
