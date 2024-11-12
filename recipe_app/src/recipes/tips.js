import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './recipe.css';

const TipsContainer = () => {
  const [tips, setTips] = useState([]);
  const [currentTipIndex, setCurrentTipIndex] = useState(0); // To track the current tip
  const [loading, setLoading] = useState(true); // To track loading state
  const [newTip, setNewTip] = useState(''); // For handling new tip input

  // Function to fetch tips from the backend
  const getTips = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await axios.get(`http://127.0.0.1:8000/tips/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTips(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tips:', error);
    }
  };

  // Handle submitting a new tip
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/tips/new/`,
        { tip: newTip },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'New tip added!',
      });

      // Add the new tip to the list and reset the form
      setTips([...tips, response.data]);
      setNewTip('');
    } catch (error) {
      console.error('Error adding tip:', error);
    }
  };

  // Automatically change the tip every 20 seconds
  useEffect(() => {
    getTips();

    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 20000);

    return () => clearInterval(interval); // Clean up on unmount
  }, [tips.length]);

  if (loading) {
    return <p>Loading tips...</p>;
  }

  return (
    <div className="tips-container">
      {tips.length > 0 && (
        <div className="tip-container">
          <h2>Cooking Tips Corner🍳</h2>
          <p className="tip">{tips[currentTipIndex].tip}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="add-tip-form">
        <textarea
          value={newTip}
          onChange={(e) => setNewTip(e.target.value)}
          placeholder="Add your cooking tip here..."
          required
        />
        <button type="submit">Submit Tip</button>
      </form>
    </div>
  );
};

export default TipsContainer;
