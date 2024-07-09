import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import './App.css';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white duration-200">
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
