import React from 'react';
import DarkMode from './darkmode/DarkMode';
import '../resources/css/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header-grid">
                    <div>
                        <h1>Rick and Morty Characters</h1>
                    </div>
                        <DarkMode />
                </div>
            </div>
      </header>
    );
}

export default Header;