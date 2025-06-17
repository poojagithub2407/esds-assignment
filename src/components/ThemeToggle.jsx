import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
     const { theme, toggleTheme } = useContext(ThemeContext);

     return (
          <button
               onClick={toggleTheme}
               className="bg-blue-500 dark:bg-gray-700 px-4 py-2 rounded text-sm font-medium"
          >
               {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
     );
};

export default ThemeToggle;
