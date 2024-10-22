import React, { useState, useEffect } from 'react';
import './recipe.css';
import axios from 'axios';

const Tips = () => {
  const [tips, setTip] = useState([]);
  const [currentTipIndex, setCurrentTipIndex] = useState(0); // To track the current tip
  const [loading, setLoading] = useState(true); // To track loading state

  const getTips = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    // console.log('Using token:', token);  

    try {
      const response = await axios.get(`http://127.0.0.1:8000/tips/`, {
        headers: {
          Authorization: `Bearer ${token}`,  
        },
      });

      setTip(response.data);  
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching tips:', error); 
    }
  };

  useEffect(() => {
    getTips(); // Data retrieval

    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => {
        return (prevIndex + 1) % tips.length;
      });
    }, 20000); // Change tip every 20 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [tips.length]); 

  if (loading) {
    return <p>Loading tips...</p>;
  }

  
  return (
    <div className='tips-container'>
      {tips.length > 0 && (
        <div className='tip-container'>
          <h2>Cooking Tips Corner🍳</h2>
  
          <p className='tip'>{tips[currentTipIndex].tip}</p>
        </div>
      )}
    </div>
  );

};

export default Tips;
