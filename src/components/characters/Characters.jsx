import React, { useState, useEffect, useReducer } from 'react';
import './characters.css';

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case 'DELETE_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites.filter(itemFavorite => itemFavorite.id !== action.payload.id)]
            };
            default:
                return state;
    }
}

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    },[]);

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    const deleteClick = favorite => {
        dispatch({ type: 'DELETE_FAVORITE', payload: favorite })
    }

    return (
        <section className="Characters">
        <div className="grid">
            {favorites.favorites.map(favorite => (
               <div key={favorite.id} className="Characters-favorite">
                <figure>
                    <img src={favorite.image} alt={favorite.name} />
                    <button type="button" onClick={() => deleteClick(favorite)}>Eliminar</button>
                </figure>
                <h5>{favorite.name}</h5>
                 </div>
            ))}
        </div>

            <div className="top-cards">
                <div className="grid">
                    {characters.map(character => (
                        <div key={character.id}>
                            <figure>
                                <img src={character.image} alt={character.name} />
                                <h2>{character.name}</h2>
                                <button type="button" onClick={() => handleClick(character)}>Agregar a favoritos</button>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Characters;