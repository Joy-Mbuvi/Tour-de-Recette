import { useState } from "react";
import React from 'react';
import axios from "axios";
import Swal from 'sweetalert2'; 
import './recipe.css';


const Addtips = () => {
    const [newTip, setNewTip] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found');
            return;
        }
        try {
            const response = await axios.post(`http://127.0.0.1:8000/tips/new/`, 
                { tip: newTip }, // Send the new tip in the request body
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
            console.log('Tip added:', response.data);

            // Clear the textarea after submission
            setNewTip("");  
        } catch (error) {
            console.error('Error adding tips:', error); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-tip-form">
            <textarea
                value={newTip}
                onChange={(e) => setNewTip(e.target.value)}
                placeholder="Add your cooking tip here..."
                required
            />
            <button type="submit">Submit Tip</button>
        </form>
    );
};

export default Addtips;
