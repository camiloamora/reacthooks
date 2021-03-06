import React, { useState, useContext } from 'react';
import './darkmode.css';
import ThemeContext from '../../context/ThemeContext';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const color = useContext(ThemeContext);

    const checkbox = document.querySelector('#checkbox');
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        checkbox.setAttribute('checked', true);
    }

    const handleClick = () => {
        setDarkMode(!darkMode)
        console.log(darkMode)
        //setDarkMode(!darkMode);
        if(!darkMode) {
            document.body.classList.add('isDarkMode');
            document.body.classList.remove('isLightMode');
        } else {
            document.body.classList.remove('isDarkMode');
            document.body.classList.add('isLightMode');
        }
    }

    return (
        <div className="dark-mode">
            <p className="dark-mode title" style={{ color }}> Dark Mode </p>
            <input type="checkbox" className="checkbox" id="checkbox" onClick={handleClick}/>
            <label className="switch" htmlFor="checkbox">
            </label>
        </div>
    );
}

export default DarkMode;
