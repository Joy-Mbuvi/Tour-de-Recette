import React, { createContext, useState, useContext, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token'); // Get the stored token
        if (token) {
            fetch('http://127.0.0.1:8000/favorites/', {
                headers: {
                    'Authorization': `Bearer ${token}`, // Add token to the Authorization header
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => setFavorites(Array.isArray(data) ? data : []))
                .catch((error) => console.error('Error fetching favorites:', error));
        }
    }, []); // Only run this once when the component mounts

    const addFavourite = (recipe) => {
        const token = localStorage.getItem('token'); // Retrieve token for each request
        setFavorites((prevFavorites) => Array.isArray(prevFavorites) ? [...prevFavorites, recipe] : [recipe]);

        fetch('http://127.0.0.1:8000/favorites/add/', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                recipe_name: recipe.recipe_name,  // or whatever key holds the recipe name
                recipe_id: recipe.id,
            }),
        }).catch((error) => {
            console.error("Error adding favorite:", error);
            setFavorites((prevFavorites) => Array.isArray(prevFavorites) ? prevFavorites.filter((fav) => fav.id !== recipe.id) : []);
        });
    };

    const removeFavorite = (recipe) => {
        const token = localStorage.getItem('token'); // Retrieve token for each request
        setFavorites((prevFavorites) => Array.isArray(prevFavorites) ? prevFavorites.filter((fav) => fav.id !== recipe.id) : []);

        fetch(`http://127.0.0.1:8000/favorites/delete`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).catch((error) => {
            console.error("Error removing favorite:", error);
            setFavorites((prevFavorites) => Array.isArray(prevFavorites) ? [...prevFavorites, recipe] : [recipe]);
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavourite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
