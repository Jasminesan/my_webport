import React from 'react';

const TopMenu = ({ darkMode, toggleDarkMode }) => (
  <nav className="flex justify-between items-center px-6 py-4 border-b shadow-sm dark:bg-gray-900 text-gray-900 dark:text-white">
    <h1 className="text-2xl font-bold">Chanathip</h1>

    <ul className="flex gap-6 text-sm items-center">
      <li className="hover:text-blue-600 cursor-pointer">Case Studies</li>
      <li className="hover:text-blue-600 cursor-pointer">Tools</li>
      <li className="hover:text-blue-600 cursor-pointer">Testimonials</li>
      <li className="hover:text-blue-600 cursor-pointer">About</li>
      <li className="hover:text-blue-600 cursor-pointer">Contact</li>

      {/* ปุ่ม Toggle Dark Mode */}
      <button
        onClick={toggleDarkMode}
        className="ml-4 px-3 py-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </ul>
  </nav>
);

export default TopMenu;
