import React from 'react';
import { useFavorites } from '../context/favouritescontext'

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="favorites-container">
      <h2 className='fav-title'>My Favorites</h2>
      {favorites.map((recipe, index) => (
        <div key={index} className="favorite-recipe-card">
          <img src={recipe.image} alt={recipe.label} />
          <h3>{recipe.label}</h3>
          <button className='remove-button' onClick={() => removeFavorite(recipe)}>remove favourite
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
