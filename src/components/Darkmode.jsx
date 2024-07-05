import React, { useState, useEffect } from "react";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2 focus:outline-none">
      {theme === 'light' ? <MdOutlineDarkMode className="w-6 h-6" /> : <MdLightMode className="w-6 h-6" />}
    </button>
  );
};

export default DarkMode;
