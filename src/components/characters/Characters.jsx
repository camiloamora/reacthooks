import React, { useState, useEffect } from 'react';
import './characters.css';

const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    },[]);

    return (
        <section className="Characters">
            <div className="top-cards">
                <div class="grid">    
            
                    {characters.map(character => (
                        <div>
                            <figure>
                                <img src={character.image} alt={character.name} />
                                <h2>{character.name}</h2>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Characters;