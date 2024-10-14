import { useState } from "react"
import React from 'react'
import axios from "axios"

const Addtips = () => {
    const[newtip,setNewTip]=useState('')

    const handlesubmit= async (e) => {
        e.preventDefault();
        try{
            await axios.post(`/tips/new`,{content:newtip})
            setNewTip('')
        }
        catch (error) {
        console.error('Error adding tip:', error);
      }
    };


    return (
    <form onSubmit={handlesubmit} className="add-tip-form">
    <textarea
      value={newtip}
      onChange={(e) => setNewTip(e.target.value)}
      placeholder="Add your cooking tip here..."
      required
    />
    <button type="submit">Submit Tip</button>
  </form>
);
};


export default Addtips
