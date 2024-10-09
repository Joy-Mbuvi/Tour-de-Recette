import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./auth/register";
import Login from "./auth/login";
import Recipe from './recipes/recipe';
import Home from './home/home';




function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/recipe' element={<Recipe/>}/>
        </Routes>
      </Router>


    );
  }
  
  export default App;
  