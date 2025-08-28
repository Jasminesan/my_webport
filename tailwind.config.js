/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // เปิดใช้งาน dark mode แบบ class
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide'), // ✅ ไม่มี , เกิน
  ],
}