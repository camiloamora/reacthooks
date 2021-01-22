import React from 'react';

const DarkMode = () => {
    return (
        <div className="dark-mode">
            <p className="dark-mode title"> Dark Mode </p>
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label className="switch" for="checkbox">
            </label>
        </div>
    );
}

export default DarkMode;
