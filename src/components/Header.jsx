import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import DarkMode from './darkmode/DarkMode';
import '../resources/css/header.css';

const Header = () => {
    const color = useContext(ThemeContext);

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header-grid">
                    <div>
                        <h1 style={{ color }}>Rick and Morty Characters</h1>
                    </div>
                        <DarkMode />
                </div>
            </div>
      </header>
    );
}

export default Header;