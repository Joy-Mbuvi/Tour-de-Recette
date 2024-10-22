import React, { useState } from 'react';
import axios from 'axios';  
import { FiSearch } from 'react-icons/fi';  

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchbar = async () => {
    const appId = 'f4c77087'; 
    const appKey = '46e76408ad7775ca71c7d4ff2d18e1e9';

    if (!query) {
      console.error('Search query is empty');
      return;
    }

    try {
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
        params: {
          q: query,
          app_id: appId,
          app_key: appKey,
          type: 'public'
        },
      });

      setResults(response.data.hits);  
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className='search-bar'>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for recipes..." 
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            searchbar();  // Call searchbar on pressing Enter key
          }
        }}
      />
      <FiSearch 
        className="search-icon"
        onClick={searchbar}  // Trigger search on clicking the icon
        style={{ cursor: 'pointer' }}  // Make the icon clickable
      />

      <div>
        {results.map((item, index) => (
          <div key={index}>
            <h3>{item.recipe.label}</h3>  
            {/* <img src={item.recipe.image} alt={item.recipe.label} /> Recipe image */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
