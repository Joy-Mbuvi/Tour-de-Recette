import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosinstance.js';  
import './recipe.css'

const Tips = () => {
  const [tips, setTips] = useState([]);
  const [currentTip, setCurrentTip] = useState('');
  
  useEffect(() => { //get all the tips first
    const fetchTips = async () => {
      try {
        const response = await axiosInstance.get(`/tips/`);
        setTips(response.data);
      } catch (error) {
        console.error('Error fetching tips:', error);
      }
    };

    fetchTips();
  }, []);

  useEffect(() => { //to switch the tips randomly
    if (tips.length > 0) {
      const interval = setInterval(() => {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        setCurrentTip(randomTip.content);
      }, 20000); 

      return () => clearInterval(interval);
    }
  }, [tips]);

  return (
    <div className='tip-container'>
      <h2>Beginner Corner</h2>
      <h3>some cooking tips to help </h3>
      <p>{currentTip || 'Loading tip...'}</p>  {}
    </div>
  );
};

export default Tips;
