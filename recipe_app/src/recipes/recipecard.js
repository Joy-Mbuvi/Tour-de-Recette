import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFavorites } from '../context/favouritescontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const RecipeListing = () => {
  const [recipes, setRecipes] = useState([]);
  const { addFavourite } = useFavorites();

  const appId = 'f4c77087'; 
  const appKey = '46e76408ad7775ca71c7d4ff2d18e1e9';

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
          params: {
            type: 'public',
            app_id: appId,
            app_key: appKey,
            q: 'italian',
          },
        });
        setRecipes(response.data.hits);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleaddFavourites = (recipe) => {
    addFavourite(recipe);
  };

  return (
    <div className="recipe-grid">
      {recipes.map((item, index) => (
        <div key={index} className="recipe-card">
          <img src={item.recipe.image} alt={item.recipe.label} />
          <h3>{item.recipe.label}</h3>
          <button onClick={() => handleaddFavourites(item.recipe)}>
            <FontAwesomeIcon icon={faHeart} style={{ color: "white" }} />
          </button>
          <button>View Recipe</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeListing;
