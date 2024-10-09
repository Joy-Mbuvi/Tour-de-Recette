import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'; // Import your CSS file

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='home-container'>
            <h1>🏰 Welcome to Tour de Recette! 🍴</h1>
            <p>🍽️ Join us to explore delicious recipes. 🌍🧑‍🍳</p>
            <div className="button-container">
                <button onClick={() => navigate('/register')}>Sign Up</button>
                <button onClick={() => navigate('/login')}>Login</button>
            </div>
        </div>
    );
}

export default Home;
