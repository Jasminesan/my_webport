import React from 'react';

const Header = () => (
  //className="text-left p-6 text-gray-800 dark:text-gray-200" min-h-screen flex items-center px-8 lg:px-16"
  <header className="  min-h-screen flex items-center px-8 lg:px-16">
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ส่วนข้อความ - ด้านซ้าย */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-boldtext-gray-800 dark:text-gray-200 leading-tight">
            Welcome to<br />
            My Portfolio
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl dark:text-gray-200 leading-relaxed max-w-lg">
            I'm Chanathip. I want to show my experience of the projects I've done
          </p>
        </div>
        
        {/* ส่วนรูปภาพ - ด้านขวา */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src="./01.jpg" 
              alt="Chanathip Profile" 
              className="w-72 h-96 md:w-80 md:h-[480px] lg:w-96 lg:h-[500px] xl:w-[420px] xl:h-[520px] rounded-2xl object-cover shadow-2xl" 
            />
            {/* เพิ่มเอฟเฟกต์พื้นหลัง */}
            <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;