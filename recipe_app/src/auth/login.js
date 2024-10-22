import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 

const Login = () => {
    const [formdata, setFormdata] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent form submission

        try {
            const response = await axios.post('http://127.0.0.1:8000/login/', formdata);

            const accessToken = response.data.access || response.data.accessToken;  

            if (accessToken) {
                localStorage.setItem('token', accessToken);
                console.log('Token stored successfully:', accessToken);

                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: 'Welcome back!',
                }).then(() => {
                    navigate('/recipe');  
                });
            } else {
                console.error('No access token in response');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
            Swal.fire({
                icon: 'error',
                title: 'Login error!',
                text: 'User not found!',
            });
        }
    };

    return (
        <div className='holder'>
            <div className='head'>
                <div className='text'>WELCOME BACK!</div>
                <div className='underline'></div>
            </div>
            <form className='fields' onSubmit={handleSubmit}>
                <div className='field'>
                    <label>Username</label>
                    <input type='text' name='username' value={formdata.username} onChange={handleChange} />
                </div>
                <br/>
                <div className='field'>
                    <label>Password</label>
                    <input type='password' name='password' value={formdata.password} onChange={handleChange} />
                </div>
                
                <div className='press-container'>
                    <button type='submit' className='press'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
