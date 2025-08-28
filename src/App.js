import React, { useState } from "react";
import PortfolioLandingPage from './PortfolioLandingPage';
import TopMenu from './components/TopMenu';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <TopMenu toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode}/>
        <PortfolioLandingPage/>
      </div>
    </div>
  );
}

export default App;